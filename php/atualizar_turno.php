<?php
// ============================================
// JATEL-GAMES - Atualizar Turno (para perguntas IA)
// ============================================

require_once 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

$input = json_decode(file_get_contents('php://input'), true);
$salaId = intval($input['sala_id'] ?? 0);
$novoTurno = intval($input['novo_turno'] ?? 0);

if ($salaId <= 0 || $novoTurno < 1 || $novoTurno > 2) {
    jsonResponse(['erro' => 'Parâmetros inválidos'], 400);
}

try {
    $stmt = $pdo->prepare("
        UPDATE estado_jogo SET jogador_atual = ?, turno = turno + 1
        WHERE sala_id = ?
    ");
    $stmt->execute([$novoTurno, $salaId]);
    
    jsonResponse(['sucesso' => true]);
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao atualizar turno'], 500);
}
