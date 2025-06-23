const API = 'http://localhost:3000/api/v1';
document.getElementById('consultaForm').onsubmit = async function(e) {
  e.preventDefault();
  const codigo = this.codigo.value;
  const res = await fetch(`${API}/rastreamento/${codigo}`);
  const out = document.getElementById('consultaResult');
  const json = await res.json();
  if (json.sucesso) {
    out.className = 'result';
    out.innerHTML = `Código: <b>${json.codigo}</b><br>ID Pedido: ${json.pedido_id}<br>Status: ${json.status}<br>Atualizado em: ${json.atualizado_em}`;
  } else {
    out.className = 'error';
    out.textContent = json.erro || 'Rastreamento não encontrado.';
  }
};
