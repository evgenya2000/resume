import { useEffect, useState } from 'react'
import styled from 'styled-components'
import profilePhoto from '../../../shared/assets/evgenia-profile.webp'

const sectionIds = ['about', 'cases', 'projects', 'experience', 'contact'] as const
type SectionId = (typeof sectionIds)[number]

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  z-index: 10;
  inset: 0 0 auto;
  padding: 16px var(--page-gutter);
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? 'rgba(32, 39, 33, 0.08)' : 'transparent')};
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(247, 247, 242, 0.94)' : 'rgba(247, 247, 242, 0.78)')};
  backdrop-filter: blur(14px);
  transition: background 180ms ease, border-color 180ms ease;
`

const Inner = styled.div`
  max-width: var(--page-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Wordmark = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.03em;

  img {
    width: 34px;
    height: 34px;
    flex: 0 0 34px;
    object-fit: cover;
    object-position: center 40%;
    border: 1px solid rgba(32, 39, 33, 0.12);
    border-radius: 50%;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(16px, 2.5vw, 34px);
  font-size: 13px;
  color: var(--color-muted);

  a {
    position: relative;
    padding: 8px 0;
    text-decoration: none;
    transition: color 180ms ease;
  }

  a::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: var(--color-green);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 180ms ease;
  }

  a[aria-current='location'] { color: var(--color-green-dark); font-weight: 600; }
  a[aria-current='location']::after { transform: scaleX(1); }

  @media (max-width: 900px) { gap: 15px; font-size: 12px; }
  @media (max-width: 700px) { display: none; }
`

const ContactLink = styled.a<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: ${({ $active }) => ($active ? 'var(--color-red)' : 'var(--color-green-dark)')};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 180ms ease;

  &::after { content: '↗'; font-size: 17px; line-height: 1; }
  &:hover { color: var(--color-red); }
`

export function Header() {
  const [activeSection, setActiveSection] = useState<SectionId | ''>('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => {
      const activationLine = Math.max(130, Math.round(window.innerHeight * 0.28))
      let current: SectionId | '' = ''
      const reachedPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2

      if (reachedPageEnd) {
        current = 'contact'
      } else {
        for (const id of sectionIds) {
          const section = document.getElementById(id)
          if (section && section.getBoundingClientRect().top <= activationLine) current = id
        }
      }

      setActiveSection((previous) => (previous === current ? previous : current))
      setIsScrolled(window.scrollY > 8)
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    window.addEventListener('resize', updateHeader)
    return () => {
      window.removeEventListener('scroll', updateHeader)
      window.removeEventListener('resize', updateHeader)
    }
  }, [])

  return (
    <Bar $scrolled={isScrolled}>
      <Inner>
        <Wordmark href="#top" aria-label="Евгения Лукьянова — на главную">
          <img src={profilePhoto} alt="" /><span>Евгения Лукьянова</span>
        </Wordmark>
        <Nav aria-label="Основная навигация">
          <a href="#about" aria-current={activeSection === 'about' ? 'location' : undefined}>Обо мне</a>
          <a href="#cases" aria-current={activeSection === 'cases' ? 'location' : undefined}>Кейсы</a>
          <a href="#projects" aria-current={activeSection === 'projects' ? 'location' : undefined}>Проекты</a>
          <a href="#experience" aria-current={activeSection === 'experience' ? 'location' : undefined}>Опыт</a>
          <a href="#contact" aria-current={activeSection === 'contact' ? 'location' : undefined}>Контакты</a>
        </Nav>
        <ContactLink href="https://t.me/evgenia_veg" target="_blank" rel="noreferrer" $active={activeSection === 'contact'}>Связаться</ContactLink>
      </Inner>
    </Bar>
  )
}
