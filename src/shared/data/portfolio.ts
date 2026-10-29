export type CaseStudy = {
  number: string
  eyebrow: string
  title: string
  description: string
  result: string
  resultLabel: string
  stack: string[]
  visual: 'calculator' | 'pages' | 'forms'
}

export const caseStudies: CaseStudy[] = [
  {
    number: '01',
    eyebrow: 'ЦИФРА · ТРАНСМАШХОЛДИНГ',
    title: 'Калькулятор технико-экономического обоснования',
    description: 'Самостоятельно разработала frontend модуля расчёта для локомотивов. Вместо разрозненных Excel-таблиц — понятный инструмент с формами, расчётными моделями и сохранением черновика.',
    result: '15 мин',
    resultLabel: 'вместо 4 часов на один расчёт',
    stack: ['React', 'TypeScript', 'Vite', 'Styled Components'],
    visual: 'calculator',
  },
  {
    number: '02',
    eyebrow: 'КОММЕРЧЕСКАЯ РАЗРАБОТКА · ONLY DIGITAL',
    title: 'Конструктор страниц для админ-панели',
    description: 'Объединила более 120 типовых страниц в настраиваемый шаблон. Контент-команда получила возможность самостоятельно собирать и запускать лендинги и акции.',
    result: '2–3 ч',
    resultLabel: 'вместо двух дней на публикацию',
    stack: ['React', 'TypeScript', 'Webpack', 'SCSS'],
    visual: 'pages',
  },
  {
    number: '03',
    eyebrow: 'ИНГОССТРАХ · ВЕБ-ПРИЛОЖЕНИЕ',
    title: 'Сложная заявка с банковскими сценариями',
    description: 'Спроектировала и реализовала блок динамической заявки с многошаговыми формами и валидацией по спецификации банка. Решение прошло аудит безопасности с первого раза.',
    result: '1×',
    resultLabel: 'успешное прохождение аудита',
    stack: ['Next.js', 'React', 'TypeScript', 'Redux'],
    visual: 'forms',
  },
]

export const personalProjects = [
  {
    name: 'Historical Dates',
    detail: 'Интерактивная временная шкала с синхронизированной анимацией.',
    stack: 'React · SCSS',
    code: 'https://github.com/evgenya2000/historical-dates',
    demo: 'https://evgenya2000.github.io/historical-dates/',
    type: 'timeline',
  },
  {
    name: 'Gallery',
    detail: 'Интерактивная веб-галерея, разработанная по готовому дизайну.',
    stack: '',
    code: 'https://github.com/evgenya2000/gallery',
    demo: 'https://evgenya2000.github.io/gallery/',
    type: 'gallery',
  },
  {
    name: 'Automated Cell Warehouse',
    detail: 'Симуляция управления ячеечным складом.',
    stack: 'Angular · TypeScript',
    code: 'https://github.com/evgenya2000/automated-cell-warehouse',
    demo: 'https://evgenya2000.github.io/automated-cell-warehouse/',
    type: 'warehouse',
  },
]
