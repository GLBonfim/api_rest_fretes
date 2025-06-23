const API = 'http://localhost:3000/api/v1';
const CORREIOS_API = `${API}/correios/simula`;

document.getElementById('freteForm').onsubmit = async function(e) {
  e.preventDefault();
  const data = {
    origem: this.origem.value.replace(/\D/g, ''),
    destino: this.destino.value.replace(/\D/g, ''),
    peso: parseFloat(this.peso.value),
    dimensoes: {
      altura: parseFloat(this.altura.value),
      largura: parseFloat(this.largura.value),
      comprimento: parseFloat(this.comprimento.value)
    }
  };
  // Chamada para API local
  const res = await fetch(`${API}/frete/calcular`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const out = document.getElementById('freteResult');
  const json = await res.json();
  if (json.sucesso) {
    out.className = 'result';
    // Exibe opções Magalu com botão para selecionar e ir ao pagamento
    out.innerHTML = '<b>Opções Magalu:</b><br>' + json.opcoes.map((o, i) => `
      <div style='margin-bottom:8px;'>
        <span>${o.nome}: R$ ${o.valor.toFixed(2)} - ${o.prazo} dias</span>
        <button class='btn-selecionar-frete' data-idx='${i}' style='margin-left:12px;padding:4px 12px;font-size:0.95rem;'>Selecionar</button>
      </div>
    `).join('');
    // Adiciona evento para cada botão
    setTimeout(() => {
      document.querySelectorAll('.btn-selecionar-frete').forEach(btn => {
        btn.onclick = function() {
          const idx = this.getAttribute('data-idx');
          const opcao = json.opcoes[idx];
          // Salva info do frete selecionado no localStorage
          localStorage.setItem('freteSelecionado', JSON.stringify({
            tipo: opcao.nome,
            valor: opcao.valor.toFixed(2),
            prazo: opcao.prazo,
            destinatario: document.querySelector('input[name="destino"]').value,
            endereco: '' // pode ser expandido depois
          }));
          window.location.href = 'pagamento.html';
        };
      });
    }, 100);
  } else {
    out.className = 'error';
    out.textContent = json.erro || 'Erro ao calcular frete.';
  }
  // Chamada para simulação Correios via backend
  const correiosOut = document.getElementById('correiosResult');
  correiosOut.textContent = 'Consultando Correios...';
  try {
    const correiosBody = {
      cepOrigem: data.origem,
      cepDestino: data.destino,
      vlrDeclarado: 0,
      peso: data.peso.toFixed(2),
      formato: 1,
      comprimento: data.dimensoes.comprimento,
      altura: data.dimensoes.altura,
      largura: data.dimensoes.largura,
      servicos: ["04014", "04510"] // SEDEX e PAC
    };
    const correiosRes = await fetch(CORREIOS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(correiosBody)
    });
    const correiosJson = await correiosRes.json();
    if (correiosJson && correiosJson.length > 0) {
      correiosOut.className = 'result';
      correiosOut.innerHTML = '<b>Opções Correios:</b><br>' + correiosJson.map(o => `${o.servico}: R$ ${o.valor} - ${o.prazo} dias`).join('<br>');
    } else {
      correiosOut.className = 'error';
      correiosOut.textContent = 'Não foi possível obter opções dos Correios.';
    }
  } catch (err) {
    correiosOut.className = 'error';
    correiosOut.textContent = 'Erro ao consultar Correios.';
  }
};
