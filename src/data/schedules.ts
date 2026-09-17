export interface ScheduleItem {
  days: string;
  hours: string;
}

export interface SportSchedule {
  id: string;
  name: string;
  schedules: ScheduleItem[];
  themeClass: string;
}

export const schedulesData: SportSchedule[] = [
  {
    id: 'muaythai',
    name: 'Muay Thai',
    themeClass: 'theme-thai-purple',
    schedules: [
      { days: 'Segunda e Quarta', hours: '18h' },
      { days: 'Terça e Quinta', hours: '06h • 16h • 19:30' },
      { days: 'Sexta', hours: '17:30' },
      { days: 'Sábado', hours: '10h' }
    ]
  },
  {
    id: 'jiujitsu',
    name: 'Jiu Jitsu',
    themeClass: 'theme-jiu-green',
    schedules: [
      { days: 'Segunda e Quarta', hours: '17h • 20h' },
      { days: 'Terça e Quinta', hours: '17:30 • 20:30' },
      { days: 'Sexta', hours: '19:30 (NO GI)' }
    ]
  },
  {
    id: 'boxe',
    name: 'Boxe',
    themeClass: 'theme-boxe-red',
    schedules: [
      { days: 'Segunda e Quarta', hours: '19h' },
      { days: 'Terça, Quinta e Sexta', hours: '18:30' }
    ]
  }
];
