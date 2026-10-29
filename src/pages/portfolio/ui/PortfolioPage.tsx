import { About } from '../../../widgets/about/ui/About'
import { CaseStudies } from '../../../widgets/cases/ui/CaseStudies'
import { Contact } from '../../../widgets/contact/ui/Contact'
import { Experience } from '../../../widgets/experience/ui/Experience'
import { Header } from '../../../widgets/header/ui/Header'
import { Hero } from '../../../widgets/hero/ui/Hero'
import { Projects } from '../../../widgets/projects/ui/Projects'

export function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
