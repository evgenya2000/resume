import styled from 'styled-components'
import { personalProjects } from '../../../shared/data/portfolio'
import { Reveal } from '../../../shared/ui/Reveal'

const Section = styled.section`
  padding: 118px var(--page-gutter) 126px;
  scroll-margin-top: 40px;
  @media (max-width: 640px) { padding-top: 80px; padding-bottom: 88px; }
`

const Inner = styled.div`max-width: var(--page-width); margin: 0 auto;`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
  .eyebrow { margin: 0 0 15px; color: var(--color-muted); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
  h2 { margin: 0; font-size: clamp(38px, 5.3vw, 70px); font-weight: 460; line-height: 1; letter-spacing: -0.045em; }
  a { display: inline-flex; gap: 8px; color: var(--color-green-dark); font-size: 13px; text-decoration: none; }
  a:hover { color: var(--color-red); }
  @media (max-width: 620px) { align-items: flex-start; flex-direction: column; }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`

const Card = styled.article`
  min-height: 325px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color-line);
  border-radius: 13px;
  background: var(--color-paper);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  &:hover { transform: translateY(-4px); border-color: rgba(90,127,91,0.35); box-shadow: 0 16px 35px rgba(32,39,33,0.07); }
`

const Art = styled.div<{ $type: string }>`
  height: 166px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: ${({ $type }) => $type === 'timeline' ? '#dce6dc' : $type === 'gallery' ? '#e6e0dc' : '#e2e7ec'};
  .label { position: absolute; left: 15px; top: 14px; color: rgba(32,39,33,0.55); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; }
  .screen { width: 72%; height: 91px; padding: 12px; border: 1px solid rgba(32,39,33,0.11); border-radius: 7px; background: rgba(255,254,250,0.8); box-shadow: 0 10px 22px rgba(32,39,33,0.09); }
  .screen strong { display: block; margin-bottom: 8px; color: var(--color-ink); font-size: 12px; font-weight: 560; }
  .dots { display: flex; align-items: center; gap: 7px; margin-top: 10px; }
  .dots i { width: 9px; height: 9px; border: 2px solid var(--color-green); border-radius: 50%; background: #f9fbf7; }
  .dots i:nth-child(2) { width: 40px; height: 1px; border: 0; border-radius: 0; background: rgba(90,127,91,0.5); }
  .tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
  .tiles i { height: 33px; border-radius: 3px; background: #a01828; opacity: 0.72; }
  .tiles i:nth-child(2) { background: #624f4b; opacity: 0.58; }
  .tiles i:nth-child(3) { background: #5a7f5b; opacity: 0.65; }
  .shelves { height: 57px; display: flex; gap: 5px; align-items: flex-end; }
  .shelves i { flex: 1; height: 80%; border-radius: 3px 3px 0 0; background: rgba(90,127,91,0.62); }
  .shelves i:nth-child(2n) { height: 55%; background: rgba(98,79,75,0.45); }
`

const CardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 19px 19px 16px;
  h3 { margin: 0; font-size: 18px; font-weight: 540; letter-spacing: -0.02em; }
  p { margin: 9px 0 14px; color: var(--color-muted); font-size: 12px; line-height: 1.55; }
  .stack { margin-top: auto; color: var(--color-green-dark); font-size: 10px; letter-spacing: 0.02em; }
  .links { display: flex; gap: 15px; margin-top: 17px; }
  .links a { color: #636a62; font-size: 11px; text-decoration: none; }
  .links a:hover { color: var(--color-red); }
`

export function Projects() {
  return (
    <Section id="projects">
      <Inner>
        <Reveal>
          <Heading>
            <div><p className="eyebrow">03 / Личные проекты</p><h2>Попробовать вживую</h2></div>
            <a href="https://github.com/evgenya2000" target="_blank" rel="noreferrer">Все проекты на GitHub <span>↗</span></a>
          </Heading>
        </Reveal>
        <Grid>
          {personalProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 50}>
              <Card>
                <Art $type={project.type} aria-hidden="true">
                  <span className="label">{project.type === 'timeline' ? 'события · время' : project.type === 'gallery' ? 'визуальный каталог' : 'схема склада'}</span>
                  <div className="screen">
                    {project.type === 'timeline' && <><strong>Исторические эпохи</strong><div className="dots"><i /><i /><i /><i /></div></>}
                    {project.type === 'gallery' && <div className="tiles"><i /><i /><i /><i /><i /><i /></div>}
                    {project.type === 'warehouse' && <><strong>Cell warehouse</strong><div className="shelves"><i /><i /><i /><i /><i /><i /><i /></div></>}
                  </div>
                </Art>
                <CardBody>
                  <h3>{project.name}</h3>
                  <p>{project.detail}</p>
                  {project.stack && <span className="stack">{project.stack}</span>}
                  <div className="links">
                    <a href={project.demo} target="_blank" rel="noreferrer">Демо ↗</a>
                    <a href={project.code} target="_blank" rel="noreferrer">Исходный код ↗</a>
                  </div>
                </CardBody>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Inner>
    </Section>
  )
}
