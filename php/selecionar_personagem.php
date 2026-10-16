<?php
// ============================================
// JATEL-GAMES - Selecionar Personagem Secret
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
    
    if ($sala['status'] !== 'em_andamento') {
        jsonResponse(['erro' => 'Sala não está pronta'], 400);
    }
    
    // Determinar jogador
    if ($sala['criador_id'] === $sessionId) {
        $jogadorNum = 1;
    } elseif ($sala['convidado_id'] === $sessionId) {
        $jogadorNum = 2;
    } else {
        jsonResponse(['erro' => 'Você não está nesta sala'], 403);
    }
    
    // Atualizar personagem secreto
    $chavePersonagem = "jogador{$jogadorNum}_personagem";
    
    $stmt = $pdo->prepare("
        UPDATE estado_jogo SET {$chavePersonagem} = ? WHERE sala_id = ?
    ");
    $stmt->execute([$personagemId, $salaId]);
    
    // Verificar se ambos já escolheram
    $stmt = $pdo->prepare("SELECT * FROM estado_jogo WHERE sala_id = ?");
    $stmt->execute([$salaId]);
    $estado = $stmt->fetch();
    
    $ambosEscolheram = ($estado['jogador1_personagem'] !== null && $estado['jogador2_personagem'] !== null);
    
    // Atualizar status se ambos escolheram
    if ($ambosEscolheram) {
        $stmt = $pdo->prepare("
            UPDATE estado_jogo SET status = 'jogando' WHERE sala_id = ?
        ");
        $stmt->execute([$salaId]);
    }
    
    jsonResponse([
        'sucesso' => true,
        'jogador' => $jogadorNum,
        'personagem_id' => $personagemId,
        'ambos_escolheram' => $ambosEscolheram,
        'mensagem' => 'Personagem selecionado!'
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao selecionar personagem'], 500);
}
