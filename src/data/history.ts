export interface SportHistory {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  themeClass: string;
}

export const historyData: SportHistory[] = [
  {
    id: 'jiujitsu',
    name: 'Jiu Jitsu',
    description: 'A "arte suave" (BJJ) foca em técnicas de alavanca, estrangulamentos e imobilizações no chão. É uma arte marcial que prova que a técnica supera a força física, sendo excelente para defesa pessoal e desenvolvimento de disciplina.',
    benefits: ['Defesa Pessoal', 'Flexibilidade', 'Controle Mental'],
    themeClass: 'theme-jiu-green'
  },
  {
    id: 'muaythai',
    name: 'Muay Thai',
    description: 'Conhecido como a "arte das oito armas", o Muay Thai é uma arte marcial tailandesa focada no combate em pé utilizando punhos, cotovelos, joelhos e canelas. É um treino intenso e altamente eficaz.',
    benefits: ['Condicionamento Físico', 'Agilidade', 'Alívio de Estresse'],
    themeClass: 'theme-thai-purple'
  },
  {
    id: 'boxe',
    name: 'Boxe',
    description: 'A "nobre arte" é uma das artes marciais mais antigas e populares do mundo. Foca exclusivamente em técnicas de soco, esquiva e movimentação de pernas, desenvolvendo grande poder de explosão.',
    benefits: ['Coordenação Motora', 'Reflexos', 'Resistência Cardiovascular'],
    themeClass: 'theme-boxe-red'
  }
];
