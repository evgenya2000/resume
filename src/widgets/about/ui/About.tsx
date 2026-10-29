import styled from 'styled-components'
import { Reveal } from '../../../shared/ui/Reveal'

const Section = styled.section`
  padding: 58px var(--page-gutter) 116px;
  scroll-margin-top: 60px;
`

const Inner = styled.div`
  max-width: var(--page-width);
  margin: 0 auto;
  padding-top: 35px;
  border-top: 1px solid var(--color-line);
  display: grid;
  grid-template-columns: 0.52fr 1.48fr;
  gap: clamp(30px, 8vw, 120px);
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 24px; }
`

const Label = styled.p`
  margin: 6px 0 0;
  color: var(--color-muted);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

const Copy = styled.div`
  p { max-width: 800px; margin: 0; font-size: clamp(22px, 3.1vw, 39px); line-height: 1.32; font-weight: 430; letter-spacing: -0.027em; }
  p span { color: var(--color-green); }
`

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(28px, 6vw, 84px);
  margin-top: 42px;
  .stat strong { display: block; color: var(--color-green-dark); font-size: 31px; font-weight: 520; letter-spacing: -0.06em; }
  .stat span { display: block; margin-top: 7px; color: var(--color-muted); font-size: 12px; }
`

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <Inner>
          <Label>01 / Подход</Label>
          <Copy>
            <p>Больше 3 лет превращаю сложные процессы в рабочие интерфейсы. Люблю <span>ясную логику, надёжную типизацию</span> и детали, которые экономят время пользователя.</p>
            <Stats>
              <div className="stat"><strong>3+ года</strong><span>коммерческой разработки</span></div>
              <div className="stat"><strong>10+</strong><span>коммерческих веб-проектов</span></div>
              <div className="stat"><strong>React · Angular</strong><span>основные направления</span></div>
            </Stats>
          </Copy>
        </Inner>
      </Reveal>
    </Section>
  )
}
