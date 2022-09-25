import { Historico } from './interfaces';

interface rawChartData {
  starred_at: number,
  user: string,
  repository?: string
}

function getComposedStarsHistory(rawData: Array<rawChartData>) {
  const starsHistory: Historico = {
    estrelas: rawData,
    agrupamento: 'dia',
    escala: 'linear'
  }
  return starsHistory;
}
export { getComposedStarsHistory }