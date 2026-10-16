<?php
// ============================================
// JATEL-GAMES - Criar Sala
// ============================================

require_once 'conexao.php';

// Apenas POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

// Obter dados
$input = json_decode(file_get_contents('php://input'), true);
$jogo = limpar($input['jogo'] ?? 'cara-a-cara');
$nome = limpar($input['nome'] ?? 'Jogador 1');

// Validar jogo
$jogosValidos = ['cara-a-cara', 'stop', 'perguntas', 'memoria'];
if (!in_array($jogo, $jogosValidos)) {
    jsonResponse(['erro' => 'Jogo inválido'], 400);
}

// Session ID do jogador
$sessionId = getSessionId();

// Gerar código da sala
$codigo = gerarCodigoSala();

try {
    // Criar sala
    $stmt = $pdo->prepare("
        INSERT INTO salas (codigo, criador_id, jogo, status)
        VALUES (?, ?, ?, 'aguardando')
    ");
    $stmt->execute([$codigo, $sessionId, $jogo]);
    $salaId = $pdo->lastInsertId();
    
    // Criar registro do jogador
    $stmt = $pdo->prepare("
        INSERT INTO jogadores (session_id, nome, sala_id, vez)
        VALUES (?, ?, ?, TRUE)
    ");
    $stmt->execute([$sessionId, $nome, $salaId]);
    
    // Criar estado inicial do jogo (para Cara a Cara)
    if ($jogo === 'cara-a-cara') {
        // Lista de todos os IDs dos personagens (1 a 40)
        $todosIds = range(1, 40);
        $jsonIds = json_encode($todosIds);
        
        $stmt = $pdo->prepare("
            INSERT INTO estado_jogo (sala_id, jogador1_restantes, jogador2_restantes, status)
            VALUES (?, ?, ?, 'selecao')
        ");
        $stmt->execute([$salaId, $jsonIds, $jsonIds]);
    }
    
    jsonResponse([
        'sucesso' => true,
        'codigo' => $codigo,
        'sala_id' => $salaId,
        'jogador' => $nome,
        'mensagem' => 'Sala criada! Compartilhe o código com seu amigo.'
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao criar sala'], 500);
}
