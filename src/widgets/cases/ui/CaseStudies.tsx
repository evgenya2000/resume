import styled from 'styled-components'
import { caseStudies } from '../../../shared/data/portfolio'
import { Reveal } from '../../../shared/ui/Reveal'

const Section = styled.section`
  padding: 104px var(--page-gutter) 124px;
  background: #eeefe8;
  scroll-margin-top: 40px;
  @media (max-width: 640px) { padding-top: 76px; padding-bottom: 80px; }
`

const Inner = styled.div`max-width: var(--page-width); margin: 0 auto;`

const Heading = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 56px;
  .eyebrow { margin: 0 0 15px; color: var(--color-muted); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
  h2 { margin: 0; font-size: clamp(38px, 5.6vw, 72px); line-height: 1; font-weight: 460; letter-spacing: -0.045em; }
  .aside { max-width: 235px; margin: 0 0 4px; color: var(--color-muted); font-size: 13px; line-height: 1.5; }
  @media (max-width: 700px) { align-items: flex-start; flex-direction: column; margin-bottom: 36px; }
`

const Card = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(330px, 0.92fr);
  gap: clamp(32px, 6vw, 92px);
  align-items: center;
  padding: 34px 0 48px;
  border-top: 1px solid rgba(32, 39, 33, 0.18);
  &:last-child { border-bottom: 1px solid rgba(32, 39, 33, 0.18); }
  @media (max-width: 820px) { grid-template-columns: 1fr; gap: 25px; padding: 30px 0 38px; }
`

const Text = styled.div`
  .meta { display: flex; align-items: center; gap: 13px; margin-bottom: 20px; color: var(--color-muted); font-size: 10px; letter-spacing: 0.11em; text-transform: uppercase; }
  .index { color: var(--color-red); }
  h3 { max-width: 600px; margin: 0; font-size: clamp(27px, 3.4vw, 43px); line-height: 1.08; font-weight: 480; letter-spacing: -0.035em; }
  p { max-width: 620px; margin: 17px 0 0; color: #5f665e; font-size: 14px; line-height: 1.65; }
  .result { display: flex; align-items: baseline; gap: 13px; margin-top: 25px; }
  .result strong { color: var(--color-green-dark); font-size: 28px; font-weight: 520; letter-spacing: -0.06em; }
  .result span { color: var(--color-muted); font-size: 12px; }
  .stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 22px; }
  .stack span { padding: 7px 10px; border: 1px solid rgba(32,39,33,0.13); border-radius: 999px; color: #5e665e; font-size: 10px; }
`

const Preview = styled.div<{ $type: string }>`
  min-height: 314px;
  overflow: hidden;
  position: relative;
  display: grid;
  place-items: center;
  padding: 26px;
  border-radius: 15px;
  background: ${({ $type }) => $type === 'forms' ? '#e6e2de' : $type === 'pages' ? '#e5ebe2' : '#e3e9df'};
  .window { width: 100%; max-width: 430px; overflow: hidden; border: 1px solid rgba(32,39,33,0.12); border-radius: 10px; background: #fffefa; box-shadow: 0 18px 40px rgba(35,45,35,0.1); }
  .toolbar { height: 29px; padding: 0 11px; display: flex; align-items: center; gap: 5px; border-bottom: 1px solid rgba(32,39,33,0.08); }
  .toolbar i { width: 5px; height: 5px; border-radius: 50%; background: #d3d5cd; }
  .content { padding: 19px; }
  .micro { color: #8a9087; font-size: 8px; letter-spacing: 0.1em; text-transform: uppercase; }
  .title { margin: 7px 0 16px; color: #30382f; font-size: 15px; font-weight: 550; letter-spacing: -0.04em; }
  .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
  .field { height: 31px; padding: 8px; border: 1px solid rgba(32,39,33,0.1); border-radius: 5px; color: #92978f; font-size: 7px; }
  .field.long { grid-column: span 2; }
  .bars { display: flex; flex-direction: column; gap: 8px; margin-top: 15px; }
  .bar { height: 6px; border-radius: 99px; background: #edf0eb; }
  .bar::after { content: ''; display: block; width: var(--width); height: 100%; border-radius: inherit; background: #7a9b79; }
  .summary { display: flex; align-items: center; justify-content: space-between; margin-top: 15px; padding-top: 12px; border-top: 1px solid rgba(32,39,33,0.1); }
  .summary strong { color: var(--color-green-dark); font-size: 18px; font-weight: 550; letter-spacing: -0.05em; }
  .summary span { color: #8a9087; font-size: 8px; }
  .badge { position: absolute; right: 20px; bottom: 19px; padding: 9px 12px; border-radius: 8px; color: white; background: #624f4b; font-size: 9px; transform: rotate(2deg); }
  @media (max-width: 820px) { min-height: 270px; }
  @media (max-width: 480px) { min-height: 245px; padding: 16px; .content { padding: 14px; } .badge { right: 10px; bottom: 10px; } }
`

function ProjectPreview({ type }: { type: string }) {
  return (
    <Preview $type={type} aria-hidden="true">
      <div className="window">
        <div className="toolbar"><i /><i /><i /></div>
        <div className="content">
          <div className="micro">{type === 'calculator' ? 'Модель расчёта' : type === 'pages' ? 'Конструктор страниц' : 'Заявка · шаг 2 из 4'}</div>
          <div className="title">{type === 'calculator' ? 'Параметры эксплуатации' : type === 'pages' ? 'Новая страница' : 'Данные заявителя'}</div>
          <div className="fields">
            <div className="field">{type === 'calculator' ? 'Срок службы' : 'Заголовок страницы'}</div>
            <div className="field">{type === 'calculator' ? 'Пробег в год' : 'Тип шаблона'}</div>
            <div className="field long">{type === 'forms' ? 'Паспортные данные и адрес' : 'Основные параметры и значения'}</div>
          </div>
          <div className="bars"><div className="bar" style={{ '--width': '76%' } as React.CSSProperties} /><div className="bar" style={{ '--width': '48%' } as React.CSSProperties} /><div className="bar" style={{ '--width': '88%' } as React.CSSProperties} /></div>
          <div className="summary"><span>Статус · проверено</span><strong>{type === 'calculator' ? '15 мин' : type === 'pages' ? '120+' : 'Готово'}</strong></div>
        </div>
      </div>
      <span className="badge">{type === 'calculator' ? 'расчётная модель' : type === 'pages' ? 'переиспользуемый шаблон' : 'валидация по шагам'}</span>
    </Preview>
  )
}

export function CaseStudies() {
  return (
    <Section id="cases">
      <Inner>
        <Reveal>
          <Heading>
            <div><p className="eyebrow">02 / Избранные кейсы</p><h2>Работа с результатом</h2></div>
            <p className="aside">Несколько задач, где интерфейс помог сделать процесс быстрее и надёжнее.</p>
          </Heading>
        </Reveal>
        {caseStudies.map((study, index) => (
          <Reveal key={study.number} delay={index * 40}>
            <Card>
              <Text>
                <div className="meta"><span className="index">{study.number}</span><span>{study.eyebrow}</span></div>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className="result"><strong>{study.result}</strong><span>{study.resultLabel}</span></div>
                <div className="stack">{study.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </Text>
              <ProjectPreview type={study.visual} />
            </Card>
          </Reveal>
        ))}
      </Inner>
    </Section>
  )
}
