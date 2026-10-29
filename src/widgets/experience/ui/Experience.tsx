import styled from 'styled-components'
import { Reveal } from '../../../shared/ui/Reveal'

const Section = styled.section`
  padding: 92px var(--page-gutter) 110px;
  color: #f7f7f2;
  background: #253329;
  scroll-margin-top: 20px;
  @media (max-width: 640px) { padding-top: 72px; padding-bottom: 80px; }
`

const Inner = styled.div`max-width: var(--page-width); margin: 0 auto;`

const Header = styled.div`
  display: grid;
  grid-template-columns: 0.52fr 1.48fr;
  gap: clamp(30px, 8vw, 120px);
  margin-bottom: 42px;
  .eyebrow { margin: 6px 0 0; color: rgba(247,247,242,0.55); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
  h2 { margin: 0; font-size: clamp(39px, 5.5vw, 69px); font-weight: 450; line-height: 1; letter-spacing: -0.045em; }
  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 23px; }
`

const Timeline = styled.div`
  margin-left: calc(26% + 2px);
  border-top: 1px solid rgba(247,247,242,0.2);
  @media (max-width: 760px) { margin-left: 0; }
`

const Role = styled.article`
  display: grid;
  grid-template-columns: 165px 1fr;
  gap: 26px;
  padding: 23px 0 25px;
  border-bottom: 1px solid rgba(247,247,242,0.2);
  .date { color: rgba(247,247,242,0.55); font-size: 11px; line-height: 1.6; }
  h3 { margin: 0; font-size: 18px; font-weight: 540; letter-spacing: -0.01em; }
  .company { margin: 5px 0 0; color: #a9c3a5; font-size: 12px; }
  .description { margin: 12px 0 0; color: rgba(247,247,242,0.67); font-size: 12px; line-height: 1.6; }
  @media (max-width: 560px) { grid-template-columns: 1fr; gap: 8px; }
`

const SkillStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 31px 0 0 calc(26% + 2px);
  span { padding: 8px 11px; border: 1px solid rgba(247,247,242,0.22); border-radius: 999px; color: rgba(247,247,242,0.76); font-size: 10px; }
  @media (max-width: 760px) { margin-left: 0; }
`

export function Experience() {
  return (
    <Section id="experience">
      <Inner>
        <Reveal>
          <Header><p className="eyebrow">04 / Опыт и инструменты</p><h2>От продукта до поддержки</h2></Header>
        </Reveal>
        <Reveal>
          <Timeline>
            <Role>
              <span className="date">Июнь 2025 — сейчас</span>
              <div><h3>Инженер-программист I категории</h3><p className="company">ТрансМашХолдинг · цифровая трансформация</p><p className="description">Развиваю платформу «ЦИФРА» и OpenProject: расчётные модули, сложные формы и таблицы, real-time обмен данными, рефакторинг и сопровождение.</p></div>
            </Role>
            <Role>
              <span className="date">Январь 2024 — июнь 2025</span>
              <div><h3>Frontend-разработчик</h3><p className="company">Only Digital · клиентские веб-приложения</p><p className="description">Разрабатывала сайты и внутренние продукты, собирала компонентные системы и улучшала процессы публикации и мониторинга.</p></div>
            </Role>
            <Role>
              <span className="date">Февраль 2023 — январь 2024</span>
              <div><h3>Frontend-разработчик</h3><p className="company">Фриланс</p><p className="description">Вела проекты полного цикла: от обсуждения требований до разработки и передачи готового продукта.</p></div>
            </Role>
          </Timeline>
          <SkillStrip aria-label="Технологии"><span>React</span><span>TypeScript</span><span>Angular</span><span>Next.js</span><span>Styled Components</span><span>Redux Toolkit</span><span>Vite</span><span>WebSocket</span><span>Figma</span></SkillStrip>
        </Reveal>
      </Inner>
    </Section>
  )
}
