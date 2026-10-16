<?php
// ============================================
// JATEL-GAMES - Sair da Sala
// ============================================

require_once 'conexao.php';

// Apenas POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

// Obter dados
$input = json_decode(file_get_contents('php://input'), true);
$salaId = intval($input['sala_id'] ?? 0);

// Validar
if ($salaId <= 0) {
    jsonResponse(['erro' => 'ID da sala inválido'], 400);
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
    
    // Enviar mensagem de saída
    $stmt = $pdo->prepare("
        INSERT INTO mensagens (sala_id, remetente_id, tipo, conteudo)
        VALUES (?, ?, 'sair', 'Jogador saiu da sala')
    ");
    $stmt->execute([$salaId, $sessionId]);
    
    // Atualizar status da sala
    $stmt = $pdo->prepare("
        UPDATE salas SET status = 'finalizado' WHERE id = ?
    ");
    $stmt->execute([$salaId]);
    
    jsonResponse([
        'sucesso' => true,
        'mensagem' => 'Você saiu da sala'
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao sair da sala'], 500);
}
