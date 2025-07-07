// Dados mockados para demonstração
const incentivosPorSegmento = [
  {
    segmento: "Alianças e Parcerias",
    faturamento: 1000000,
    incentivoUsado: 30000,
    incentivoRestante: 20000,
    pendentes: 3,
    ativos: 7,
    inativos: 2
  },
  {
    segmento: "Top Accounts",
    faturamento: 800000,
    incentivoUsado: 25000,
    incentivoRestante: 15000,
    pendentes: 2,
    ativos: 8,
    inativos: 0
  },
  {
    segmento: "Itaú",
    faturamento: 950000,
    incentivoUsado: 30000,
    incentivoRestante: 10000,
    pendentes: 1,
    ativos: 6,
    inativos: 2
  },
  {
    segmento: "RB",
    faturamento: 600000,
    incentivoUsado: 10000,
    incentivoRestante: 5000,
    pendentes: 0,
    ativos: 3,
    inativos: 1
  }
  // ...adicione os demais segmentos se quiser
];

// Função para formatar valores monetários
function moeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderSummaryCards() {
  const totalFaturado = incentivosPorSegmento.reduce((acc, s) => acc + s.faturamento, 0);
  const totalUsado = incentivosPorSegmento.reduce((acc, s) => acc + s.incentivoUsado, 0);
  const totalRestante = incentivosPorSegmento.reduce((acc, s) => acc + s.incentivoRestante, 0);
  const totalPendentes = incentivosPorSegmento.reduce((acc, s) => acc + s.pendentes, 0);
  const totalAtivos = incentivosPorSegmento.reduce((acc, s) => acc + s.ativos, 0);
  const totalInativos = incentivosPorSegmento.reduce((acc, s) => acc + s.inativos, 0);

  document.getElementById('summary-cards').innerHTML = `
    <div class="summary-card">
      <span class="summary-title">Total Faturado</span>
      <span class="summary-value highlight">${moeda(totalFaturado)}</span>
    </div>
    <div class="summary-card">
      <span class="summary-title">Incentivo Usado</span>
      <span class="summary-value">${moeda(totalUsado)}</span>
    </div>
    <div class="summary-card">
      <span class="summary-title">Incentivo Restante</span>
      <span class="summary-value">${moeda(totalRestante)}</span>
    </div>
    <div class="summary-card">
      <span class="summary-title">Pendentes</span>
      <span class="summary-value">${totalPendentes}</span>
    </div>
    <div class="summary-card">
      <span class="summary-title">Ativos</span>
      <span class="summary-value">${totalAtivos}</span>
    </div>
    <div class="summary-card">
      <span class="summary-title">Inativos</span>
      <span class="summary-value">${totalInativos}</span>
    </div>
  `;
}

function renderTabela() {
  const tbody = document.querySelector("#tabela-incentivos tbody");
  tbody.innerHTML = "";
  incentivosPorSegmento.forEach(seg => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${seg.segmento}</td>
      <td>${moeda(seg.faturamento)}</td>
      <td>${moeda(seg.incentivoUsado)}</td>
      <td>${moeda(seg.incentivoRestante)}</td>
      <td>${seg.pendentes}</td>
      <td>${seg.ativos}</td>
      <td>${seg.inativos}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderGraficos() {
  // Volume x Incentivo (barras lado a lado)
  const ctx = document.getElementById('volumeIncentivoChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: incentivosPorSegmento.map(s => s.segmento),
      datasets: [
        {
          label: 'Faturamento',
          data: incentivosPorSegmento.map(s => s.faturamento),
          backgroundColor: '#6fa8dc'
        },
        {
          label: 'Incentivo Usado',
          data: incentivosPorSegmento.map(s => s.incentivoUsado),
          backgroundColor: '#93c47d'
        },
        {
          label: 'Incentivo Restante',
          data: incentivosPorSegmento.map(s => s.incentivoRestante),
          backgroundColor: '#ffe599'
        }
      ]
    },
    options: {
      plugins: { legend: { position: 'top' } },
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Status dos Incentivos (pizza)
  const ctx2 = document.getElementById('statusIncentivoChart').getContext('2d');
  const totalPendentes = incentivosPorSegmento.reduce((acc, s) => acc + s.pendentes, 0);
  const totalAtivos = incentivosPorSegmento.reduce((acc, s) => acc + s.ativos, 0);
  const totalInativos = incentivosPorSegmento.reduce((acc, s) => acc + s.inativos, 0);
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Pendentes', 'Ativos', 'Inativos'],
      datasets: [{
        data: [totalPendentes, totalAtivos, totalInativos],
        backgroundColor: ['#ffd966', '#76a5af', '#d9d2e9']
      }]
    },
    options: {
      plugins: { legend: { position: 'bottom' } },
      responsive: true
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSummaryCards();
  renderTabela();
  renderGraficos();

  // Filtros (mock, não filtra de verdade ainda)
  document.getElementById('ano-filter').addEventListener('change', function() {
    // Aqui você pode filtrar os dados da API conforme o ano
  });
  document.getElementById('segmento-filter').addEventListener('change', function() {
    // Aqui você pode filtrar os dados da API conforme o segmento
  });
});