<?php
// ============================================
// JATEL-GAMES - Entrar na Sala
// ============================================

require_once 'conexao.php';

// Apenas POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

// Obter dados
$input = json_decode(file_get_contents('php://input'), true);
$codigo = strtoupper(trim($input['codigo'] ?? ''));
$nome = limpar($input['nome'] ?? 'Jogador 2');

// Validar código
if (strlen($codigo) !== 6) {
    jsonResponse(['erro' => 'Código deve ter 6 caracteres'], 400);
}

// Session ID do jogador
$sessionId = getSessionId();

try {
    // Buscar sala
    $stmt = $pdo->prepare("SELECT * FROM salas WHERE codigo = ?");
    $stmt->execute([$codigo]);
    $sala = $stmt->fetch();
    
    if (!$sala) {
        jsonResponse(['erro' => 'Sala não encontrada'], 404);
    }
    
    if ($sala['status'] === 'finalizado') {
        jsonResponse(['erro' => 'Esta sala já foi encerrada'], 400);
    }
    
    if ($sala['criador_id'] === $sessionId) {
        jsonResponse(['erro' => 'Você não pode entrar na sua própria sala'], 400);
    }
    
    // Verificar se já tem convidado
    if ($sala['convidado_id'] !== null && $sala['convidado_id'] !== $sessionId) {
        jsonResponse(['erro' => 'Sala já está cheia'], 400);
    }
    
    // Atualizar sala
    $stmt = $pdo->prepare("
        UPDATE salas 
        SET convidado_id = ?, status = 'em_andamento'
        WHERE id = ?
    ");
    $stmt->execute([$sessionId, $sala['id']]);
    
    // Registrar jogador
    $stmt = $pdo->prepare("
        INSERT INTO jogadores (session_id, nome, sala_id, vez)
        VALUES (?, ?, ?, FALSE)
    ");
    $stmt->execute([$sessionId, $nome, $sala['id']]);
    
    jsonResponse([
        'sucesso' => true,
        'sala_id' => $sala['id'],
        'jogo' => $sala['jogo'],
        'jogador' => $nome,
        'mensagem' => 'Você entrou na sala!'
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao entrar na sala'], 500);
}
