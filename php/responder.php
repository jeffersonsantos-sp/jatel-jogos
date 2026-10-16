<?php
// ============================================
// JATEL-GAMES - Responder Pergunta
// ============================================

require_once 'conexao.php';

// Apenas POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

// Obter dados
$input = json_decode(file_get_contents('php://input'), true);
$salaId = intval($input['sala_id'] ?? 0);
$mensagemId = intval($input['mensagem_id'] ?? 0);
$resposta = $input['resposta']; // true ou false
$pergunta = $input['pergunta'] ?? '';
$jogadorRespondeu = intval($input['jogador_respondeu'] ?? 0);

// Validar
if ($salaId <= 0) {
    jsonResponse(['erro' => 'ID da sala inválido'], 400);
}

if (!is_bool($resposta)) {
    jsonResponse(['erro' => 'Resposta deve ser true ou false'], 400);
}

$sessionId = getSessionId();

try {
    // Buscar sala
    $stmt = $pdo->prepare("SELECT * FROM salas WHERE id = ?");
    $stmt->execute([$salaId]);
    $sala = $stmt->fetch();
    
    if (!$sala) {
        jsonResponse(['erro' => 'Sala não encontrada'], 404);
    }
    
    // Criar nova mensagem de resposta (NÃO atualizar a original)
    $stmt = $pdo->prepare("SELECT * FROM mensagens WHERE id = ? AND sala_id = ?");
    $stmt->execute([$mensagemId, $salaId]);
    $mensagem = $stmt->fetch();
    
    $conteudoOriginal = $mensagem['conteudo'] ?? '';
    $dadosOriginais = json_decode($conteudoOriginal, true);
    $perguntaOriginal = $dadosOriginais['pergunta'] ?? $pergunta;
    
    $jogadorPerguntou = $jogadorRespondeu === 1 ? 2 : 1;
    
    $conteudoResposta = json_encode([
        'pergunta' => $perguntaOriginal,
        'resposta' => $resposta,
        'jogador_perguntou' => $jogadorPerguntou,
        'jogador_respondeu' => $jogadorRespondeu
    ]);
    
    $stmt = $pdo->prepare("
        INSERT INTO mensagens (sala_id, remetente_id, tipo, conteudo)
        VALUES (?, ?, 'resposta', ?)
    ");
    $stmt->execute([$salaId, $sessionId, $conteudoResposta]);
    
    // Atualizar turno - agora é vez de quem respondeu
    $stmt = $pdo->prepare("
        UPDATE estado_jogo SET
            jogador_atual = ?,
            turno = turno + 1
        WHERE sala_id = ?
    ");
    $stmt->execute([$jogadorRespondeu, $salaId]);
    
    jsonResponse([
        'sucesso' => true,
        'resposta' => $resposta,
        'pergunta' => $perguntaOriginal,
        'jogador_perguntou' => $jogadorPerguntou,
        'jogador_respondeu' => $jogadorRespondeu,
        'proximo_jogador' => $jogadorRespondeu
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao responder'], 500);
}
