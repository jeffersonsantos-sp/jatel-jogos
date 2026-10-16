<?php
// ============================================
// JATEL-GAMES - Receber Estado do Jogo (Polling)
// ============================================

require_once 'conexao.php';

// Apenas GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    jsonResponse(['erro' => 'Método não permitido'], 405);
}

// Obter dados
$salaId = intval($_GET['sala_id'] ?? 0);
$ultimaMsg = intval($_GET['ultima_msg'] ?? 0);

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
    
    // Buscar estado do jogo
    $stmt = $pdo->prepare("SELECT * FROM estado_jogo WHERE sala_id = ?");
    $stmt->execute([$salaId]);
    $estado = $stmt->fetch();
    
    // Buscar novas mensagens
    $stmt = $pdo->prepare("
        SELECT * FROM mensagens 
        WHERE sala_id = ? AND id > ?
        ORDER BY id ASC
    ");
    $stmt->execute([$salaId, $ultimaMsg]);
    $mensagens = $stmt->fetchAll();
    
    // Determinar qual jogador é o solicitante
    $jogadorNum = 0;
    if ($sala['criador_id'] === $sessionId) {
        $jogadorNum = 1;
    } elseif ($sala['convidado_id'] === $sessionId) {
        $jogadorNum = 2;
    }
    
    // Buscar nomes dos jogadores
    $stmt = $pdo->prepare("SELECT session_id, nome FROM jogadores WHERE sala_id = ?");
    $stmt->execute([$salaId]);
    $jogadores = $stmt->fetchAll();
    
    $jogador1Nome = 'Jogador 1';
    $jogador2Nome = 'Jogador 2';
    
    foreach ($jogadores as $j) {
        if ($j['session_id'] === $sala['criador_id']) {
            $jogador1Nome = $j['nome'];
        } elseif ($j['session_id'] === $sala['convidado_id']) {
            $jogador2Nome = $j['nome'];
        }
    }
    
    // Montar resposta
    $resposta = [
        'sucesso' => true,
        'sala' => [
            'codigo' => $sala['codigo'],
            'status' => $sala['status'],
            'jogo' => $sala['jogo']
        ],
        'jogador_numero' => $jogadorNum,
        'jogador1_nome' => $jogador1Nome,
        'jogador2_nome' => $jogador2Nome,
        'jogador_atual' => $estado['jogador_atual'] ?? 1,
        'turno' => $estado['turno'] ?? 1,
        'eliminados' => $estado['eliminados'] ?? 0,
        'status_jogo' => $estado['status'] ?? 'selecao',
        'mensagens' => []
    ];
    
    // Adicionar personagens restantes do jogador solicitante
    if ($jogadorNum > 0 && $estado) {
        $chaveRestantes = "jogador{$jogadorNum}_restantes";
        $resposta['meus_restantes'] = json_decode($estado[$chaveRestantes] ?? '[]', true);
        $resposta['total_restantes'] = count($resposta['meus_restantes']);
    }
    
    // Processar mensagens
    foreach ($mensagens as $msg) {
        $msgFormatada = [
            'id' => $msg['id'],
            'tipo' => $msg['tipo'],
            'remetente' => $msg['remetente_id'] === $sessionId ? 'eu' : 'adversario',
            'conteudo' => $msg['conteudo'],
            'criado_em' => $msg['criado_em']
        ];
        
        // Tentar decodificar JSON
        $conteudo = json_decode($msg['conteudo'], true);
        if ($conteudo) {
            $msgFormatada['conteudo'] = $conteudo;
        }
        
        $resposta['mensagens'][] = $msgFormatada;
    }
    
    jsonResponse($resposta);
    
} catch (PDOException $e) {
    jsonResponse(['erro' => 'Erro ao buscar estado'], 500);
}
