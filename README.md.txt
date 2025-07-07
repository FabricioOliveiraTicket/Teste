# Incentivos Comerciais - Dashboard

Este projeto é um dashboard web para visualização de incentivos comerciais por segmento, com informações sobre faturamento, incentivos usados, incentivos restantes e status (pendentes, ativos, inativos), incluindo gráficos comparativos de Volume x Incentivo.

## Funcionalidades

- Resumo dos principais indicadores de incentivos por segmento.
- Gráficos (barras e pizza) de Volume x Incentivo e status dos incentivos.
- Tabela detalhada por segmento.
- Filtros por ano e segmento.
- Layout responsivo e moderno.

## Como Usar

1. **Clone ou baixe este repositório.**
2. Certifique-se de que os arquivos abaixo estejam na mesma pasta:
   - `incentivos.html`
   - `incentivos.js`
   - `style.css`
3. Abra o arquivo `incentivos.html` no navegador.

> **Obs:** Os dados são mockados no arquivo JS. Para integrar com uma API real, basta substituir os dados da variável `incentivosPorSegmento` pelas chamadas à sua API.

## Estrutura dos Arquivos

- `incentivos.html` – Página principal do dashboard de incentivos.
- `incentivos.js` – Script responsável pela lógica, renderização dos cards, tabelas e gráficos.
- `style.css` – Estilos visuais para manter o layout moderno e responsivo.

## Personalização

- Para adicionar ou alterar segmentos, edite a variável `incentivosPorSegmento` em `incentivos.js`.
- Para conectar a uma API real, altere as funções de renderização para buscar dados via `fetch`.

## Exemplo de Dados

```js
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
  // ... outros segmentos
];
```

## Dependências

- [Chart.js](https://www.chartjs.org/) (CDN já incluída no HTML)

## Screenshots

> Adicione aqui prints do dashboard para ilustrar o funcionamento.

## Licença

MIT
