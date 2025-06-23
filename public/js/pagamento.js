// Simulação de pagamento e criação de pedido
// Espera receber dados do frete via localStorage

document.addEventListener('DOMContentLoaded', function() {
  const resumoDiv = document.getElementById('resumoFrete');
  const btnPagar = document.getElementById('btnPagar');
  const pagamentoMsg = document.getElementById('pagamentoMsg');

  // Recupera dados do frete selecionado
  let frete = null;
  try {
    frete = JSON.parse(localStorage.getItem('freteSelecionado'));
  } catch {}

  if (!frete) {
    resumoDiv.innerHTML = '<span style="color:#c62828">Erro: Nenhum frete selecionado.</span>';
    btnPagar.disabled = true;
    return;
  }

  resumoDiv.innerHTML = `
    <b>Resumo do Pedido:</b><br>
    Tipo de Frete: <b>${frete.tipo}</b><br>
    Valor: <b>R$ ${frete.valor}</b><br>
    Prazo: <b>${frete.prazo} dias</b><br>
    Destinatário: <b>${frete.destinatario || '-'}</b><br>
    Endereço: <b>${frete.endereco || '-'}</b>
  `;

  btnPagar.onclick = async function() {
    btnPagar.disabled = true;
    pagamentoMsg.innerHTML = 'Processando pagamento...';
    // Simula pagamento
    setTimeout(async () => {
      // Cria pedido/rastreamento no backend
      try {
        const resp = await fetch('http://localhost:3000/api/v1/rastreamento', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pedido_id: 'PED' + Date.now() + Math.floor(Math.random()*1000),
            status: 'Pedido Efetuado'
          })
        });
        const data = await resp.json();
        if (resp.ok && data.codigo) {
          pagamentoMsg.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
              <svg width="70" height="70" viewBox="0 0 70 70"><circle cx="35" cy="35" r="32" fill="#e3f2fd" stroke="#1976d2" stroke-width="4"/><polyline id="checkmark" points="22,38 22,38 22,38" fill="none" stroke="#1976d2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><animate attributeName='points' values='22,38 22,38 22,38;22,38 32,48 22,38;22,38 32,48 50,26' keyTimes='0;0.5;1' dur='1.8s' fill='freeze'/></polyline></svg>
              <span style='color:#1976d2;font-size:1.2rem;font-weight:600;'>Pagamento confirmado!</span>
              <span style='color:#1976d2;'>Seu código de rastreamento: <b>${data.codigo}</b></span>
              <span style='color:#1976d2;font-size:0.98rem;'>Redirecionando para a página inicial...</span>
            </div>`;
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 3200);
        } else {
          pagamentoMsg.innerHTML = `<span style='color:#c62828'>Erro ao criar pedido: ${data.error || 'Tente novamente.'}</span><br>Redirecionando para a página inicial...`;
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 2200);
        }
      } catch (e) {
        pagamentoMsg.innerHTML = `<span style='color:#c62828'>Erro de conexão. Tente novamente.</span>`;
      }
    }, 1200);
  };
});
