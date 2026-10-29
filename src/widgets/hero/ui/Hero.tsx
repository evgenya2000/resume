import styled from 'styled-components'
import { Reveal } from '../../../shared/ui/Reveal'

const Section = styled.section`
  min-height: min(850px, 100svh);
  padding: 142px var(--page-gutter) 74px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(ellipse at 83% 46%, rgba(90, 127, 91, 0.08), transparent 33%),
    var(--color-bg);

  @media (max-width: 760px) { min-height: auto; padding-top: 132px; padding-bottom: 62px; }
`

const Grid = styled.div`
  width: 100%;
  max-width: var(--page-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.13fr) minmax(300px, 0.87fr);
  gap: clamp(38px, 7vw, 108px);
  align-items: center;

  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 46px; }
`

const Copy = styled.div`
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 26px;
    color: var(--color-muted);
    font-size: 11px;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }
  .eyebrow::before { content: ''; width: 27px; height: 1px; background: var(--color-green); }
  h1 {
    max-width: 790px;
    margin: 0;
    font-size: clamp(48px, 7.2vw, 100px);
    line-height: 0.99;
    font-weight: 480;
    letter-spacing: -0.05em;
  }
  h1 em { color: var(--color-green); font-style: normal; }
  .lead {
    max-width: 515px;
    margin: 28px 0 0;
    color: #60675f;
    font-size: clamp(16px, 1.55vw, 19px);
    line-height: 1.55;
  }
  .actions { display: flex; align-items: center; gap: 26px; margin-top: 34px; }
  .primary {
    min-height: 50px;
    padding: 0 21px;
    display: inline-flex;
    align-items: center;
    gap: 18px;
    border-radius: 999px;
    background: var(--color-green);
    color: white;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: background 180ms ease, transform 180ms ease;
  }
  .primary:hover { background: var(--color-green-dark); transform: translateY(-2px); }
  .primary span { font-size: 17px; }
  .secondary { color: var(--color-muted); font-size: 13px; text-decoration: none; }
  .secondary:hover { color: var(--color-ink); }
  @media (max-width: 500px) { .actions { gap: 18px; } .primary { padding: 0 16px; } }
`

const Visual = styled.div`
  position: relative;
  min-height: 415px;
  display: grid;
  place-items: center;
  @media (max-width: 900px) { min-height: 345px; }
  @media (max-width: 480px) { min-height: 300px; }
`

const Orbit = styled.div`
  position: absolute;
  width: min(100%, 440px);
  aspect-ratio: 1;
  border: 1px solid rgba(90, 127, 91, 0.15);
  border-radius: 50%;
  &::before, &::after { content: ''; position: absolute; border: 1px solid rgba(90, 127, 91, 0.12); border-radius: 50%; inset: 9%; }
  &::after { inset: 20%; }
`

const MiniCard = styled.div`
  z-index: 1;
  width: min(100%, 370px);
  padding: 24px;
  border: 1px solid rgba(32, 39, 33, 0.1);
  border-radius: 18px;
  background: rgba(255, 254, 250, 0.94);
  box-shadow: 0 28px 70px rgba(43, 55, 43, 0.1);
  transform: rotate(-2deg);
  .top { display: flex; align-items: center; justify-content: space-between; color: var(--color-muted); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; }
  .status { display: inline-flex; align-items: center; gap: 6px; letter-spacing: 0; text-transform: none; }
  .status::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--color-green); }
  h2 { margin: 27px 0 20px; font-size: 21px; font-weight: 550; letter-spacing: -0.045em; }
  .row { display: flex; justify-content: space-between; padding: 12px 0; border-top: 1px solid var(--color-line); color: #687067; font-size: 12px; }
  .row strong { color: var(--color-ink); font-weight: 550; }
  .bottom { display: flex; align-items: flex-end; justify-content: space-between; margin-top: 20px; padding-top: 17px; border-top: 1px solid var(--color-line); }
  .bottom small { display: block; margin-bottom: 6px; color: var(--color-muted); font-size: 10px; }
  .bottom strong { color: var(--color-green-dark); font-size: 30px; line-height: 1; font-weight: 550; letter-spacing: -0.06em; }
  .arrow { color: var(--color-red); font-size: 24px; }
  @media (max-width: 480px) { padding: 19px; .bottom strong { font-size: 27px; } }
`

const Note = styled.div`
  position: absolute;
  z-index: 2;
  right: -4px;
  bottom: 36px;
  padding: 13px 16px;
  border-radius: 12px;
  background: #624f4b;
  color: white;
  box-shadow: 0 10px 30px rgba(98, 79, 75, 0.16);
  transform: rotate(2deg);
  small { display: block; margin-bottom: 4px; opacity: 0.7; font-size: 9px; letter-spacing: 0.09em; text-transform: uppercase; }
  strong { font-size: 13px; font-weight: 550; }
  @media (max-width: 900px) { right: max(0px, calc((100% - 370px) / 2 - 15px)); bottom: 18px; }
`

export function Hero() {
  return (
    <Section id="top">
      <Grid>
        <Reveal>
          <Copy>
            <p className="eyebrow">Frontend-разработчик · Санкт-Петербург</p>
            <h1>Создаю понятные <em>цифровые</em> продукты</h1>
            <p className="lead">Евгения Лукьянова. Разрабатываю интерфейсы, которые помогают решать сложные задачи проще.</p>
            <div className="actions">
              <a className="primary" href="#cases">Смотреть кейсы <span>↓</span></a>
              <a className="secondary" href="https://github.com/evgenya2000" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </Copy>
        </Reveal>
        <Reveal delay={110}>
          <Visual aria-label="Пример результата: расчёт занимает 15 минут вместо 4 часов">
            <Orbit />
            <MiniCard>
              <div className="top"><span>Цифра / калькулятор ТЭО</span><span className="status">готово</span></div>
              <h2>Экономика локомотива</h2>
              <div className="row"><span>Стоимость жизненного цикла</span><strong>по модели</strong></div>
              <div className="row"><span>Эксплуатационные затраты</span><strong>учтены</strong></div>
              <div className="bottom"><div><small>Подготовка расчёта</small><strong>15 минут</strong></div><span className="arrow">↗</span></div>
            </MiniCard>
            <Note><small>Было раньше</small><strong>4 часа в Excel</strong></Note>
          </Visual>
        </Reveal>
      </Grid>
    </Section>
  )
}
