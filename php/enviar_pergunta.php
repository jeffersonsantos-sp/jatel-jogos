<?php
// ============================================
// JATEL-GAMES - Enviar Pergunta
// ============================================

require_once 'conexao.php';

// Apenas POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

// Obter dados
$input = json_decode(file_get_contents('php://input'), true);
$salaId = intval($input['sala_id'] ?? 0);
$pergunta = limpar($input['pergunta'] ?? '');
$jogadorNumero = intval($input['jogador_numero'] ?? 0);
$tipo = limpar($input['tipo'] ?? 'pergunta');

// Validar
if ($salaId <= 0) {
    jsonResponse(['erro' => 'ID da sala inválido'], 400);
}

if (empty($pergunta)) {
    jsonResponse(['erro' => 'Pergunta não pode estar vazia'], 400);
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
    
    if ($sala['status'] !== 'em_andamento') {
        jsonResponse(['erro' => 'Sala não está em andamento'], 400);
    }
    
    // Verificar se é a vez do jogador (exceto para mensagens de sistema)
    if ($tipo !== 'errou_adivinhar') {
        $estado = buscarEstado($salaId);
        $jogadorAtual = $estado['jogador_atual'];
        
        $ehMinhaVez = false;
        if ($jogadorAtual === 1 && $sala['criador_id'] === $sessionId) {
            $ehMinhaVez = true;
        }
        if ($jogadorAtual === 2 && $sala['convidado_id'] === $sessionId) {
            $ehMinhaVez = true;
        }
        
        if (!$ehMinhaVez) {
            jsonResponse(['erro' => 'Não é sua vez de perguntar'], 403);
        }
    }
    
    // Salvar mensagem
    $conteudo = json_encode([
        'pergunta' => $pergunta,
        'jogador_perguntou' => $jogadorNumero
    ]);
    
    $stmt = $pdo->prepare("
        INSERT INTO mensagens (sala_id, remetente_id, tipo, conteudo)
        VALUES (?, ?, ?, ?)
    ");
    $stmt->execute([$salaId, $sessionId, $tipo, $conteudo]);
    
    // Não alterar jogador_atual aqui — o turno só muda quando o adversário responde
    // (responder.php atualiza jogador_atual para quem respondeu)
    
    jsonResponse([
        'sucesso' => true,
        'mensagem' => 'Pergunta enviada!',
        'pergunta' => $pergunta
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao enviar pergunta'], 500);
}

// ============================================
// FUNÇÃO AUXILIAR
// ============================================

function buscarEstado($salaId) {
    global $pdo;
    
    $stmt = $pdo->prepare("SELECT * FROM estado_jogo WHERE sala_id = ?");
    $stmt->execute([$salaId]);
    $estado = $stmt->fetch();
    
    if (!$estado) {
        jsonResponse(['erro' => 'Estado do jogo não encontrado'], 500);
    }
    
    return $estado;
}
