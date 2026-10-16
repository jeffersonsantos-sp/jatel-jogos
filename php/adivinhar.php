<?php
// ============================================
// JATEL-GAMES - Adivinhar Personagem
// ============================================

require_once 'conexao.php';

// Apenas POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

// Obter dados
$input = json_decode(file_get_contents('php://input'), true);
$salaId = intval($input['sala_id'] ?? 0);
$personagemId = intval($input['personagem_id'] ?? 0);

// Validar
if ($salaId <= 0) {
    jsonResponse(['erro' => 'ID da sala inválido'], 400);
}

if ($personagemId <= 0) {
    jsonResponse(['erro' => 'Selecione um personagem'], 400);
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
    
    // Buscar estado
    $stmt = $pdo->prepare("SELECT * FROM estado_jogo WHERE sala_id = ?");
    $stmt->execute([$salaId]);
    $estado = $stmt->fetch();
    
    // Determinar jogador e adversário
    if ($sala['criador_id'] === $sessionId) {
        $jogadorNum = 1;
        $adversarioNum = 2;
    } else {
        $jogadorNum = 2;
        $adversarioNum = 1;
    }
    
    // Buscar personagem secreto do adversário
    $chaveAdversario = "jogador{$adversarioNum}_personagem";
    $personagemSecreto = intval($estado[$chaveAdversario]);
    
    // Verificar acerto
    $acertou = ($personagemId === $personagemSecreto);
    
    // Salvar tentativa
    $stmt = $pdo->prepare("
        INSERT INTO mensagens (sala_id, remetente_id, tipo, conteudo)
        VALUES (?, ?, 'adivinhar', ?)
    ");
    $stmt->execute([
        $salaId,
        $sessionId,
        json_encode([
            'personagem_id' => $personagemId,
            'acertou' => $acertou
        ])
    ]);
    
    // Atualizar status se acertou
    if ($acertou) {
        $stmt = $pdo->prepare("
            UPDATE salas SET status = 'finalizado' WHERE id = ?
        ");
        $stmt->execute([$salaId]);
        
        $stmt = $pdo->prepare("
            UPDATE estado_jogo SET status = 'finalizado' WHERE sala_id = ?
        ");
        $stmt->execute([$salaId]);
    }
    
    jsonResponse([
        'sucesso' => true,
        'acertou' => $acertou,
        'personagem_id' => $personagemId,
        'personagem_secreto_id' => $personagemSecreto,
        'mensagem' => $acertou ? 'Parabéns! Você acertou!' : 'Errou! Tente novamente.'
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao adivinhar'], 500);
}
