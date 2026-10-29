import styled from 'styled-components'
import { Reveal } from '../../../shared/ui/Reveal'

const Section = styled.section`
  padding: 110px var(--page-gutter) 28px;
  scroll-margin-top: 40px;
  @media (max-width: 640px) { padding-top: 78px; }
`

const Inner = styled.div`max-width: var(--page-width); margin: 0 auto;`

const Panel = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 35px;
  padding: clamp(28px, 6vw, 70px);
  border-radius: 18px;
  background: #e7ece3;
  &::after { content: ''; position: absolute; width: 310px; height: 310px; right: 9%; top: -205px; border: 1px solid rgba(90,127,91,0.2); border-radius: 50%; box-shadow: 0 0 0 28px rgba(90,127,91,0.035), 0 0 0 58px rgba(90,127,91,0.035); pointer-events: none; }
  .eyebrow { margin: 0 0 18px; color: var(--color-muted); font-size: 10px; letter-spacing: 0.13em; text-transform: uppercase; }
  h2 { max-width: 660px; margin: 0; font-size: clamp(38px, 6vw, 72px); line-height: 0.98; font-weight: 460; letter-spacing: -0.045em; }
  .note { margin: 19px 0 0; color: var(--color-muted); font-size: 13px; }
  @media (max-width: 720px) { align-items: flex-start; flex-direction: column; }
`

const Button = styled.a`
  z-index: 1;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 20px;
  min-height: 53px;
  padding: 0 22px;
  border-radius: 999px;
  background: var(--color-green);
  color: white;
  font-size: 13px;
  font-weight: 550;
  text-decoration: none;
  transition: background 180ms ease, transform 180ms ease;
  &:hover { background: var(--color-green-dark); transform: translateY(-2px); }
  span { font-size: 17px; }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 27px 2px 23px;
  color: var(--color-muted);
  font-size: 10px;
  .links { display: flex; gap: 18px; }
  a { text-decoration: none; }
  a:hover { color: var(--color-ink); }
  @media (max-width: 560px) { align-items: flex-start; flex-direction: column; }
`

export function Contact() {
  return (
    <Section id="contact">
      <Inner>
        <Reveal>
          <Panel>
            <div><p className="eyebrow">05 / Контакты</p><h2>Давайте сделаем сложное понятным</h2><p className="note">Открыта к интересным задачам и сотрудничеству.</p></div>
            <Button href="https://t.me/evgenia_veg" target="_blank" rel="noreferrer">Написать в Telegram <span>↗</span></Button>
          </Panel>
        </Reveal>
        <Footer>
          <span>© 2026 Евгения Лукьянова · Frontend-разработчик</span>
          <div className="links"><a href="https://github.com/evgenya2000" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Наверх ↑</a></div>
        </Footer>
      </Inner>
    </Section>
  )
}
