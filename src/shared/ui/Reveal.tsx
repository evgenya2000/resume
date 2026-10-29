import type { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useReveal } from '../lib/useReveal'

const MotionBox = styled.div<{ $visible: boolean; $delay: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '14px')});
  transition: opacity 560ms ease, transform 560ms cubic-bezier(0.2, 0.65, 0.25, 1);
  transition-delay: ${({ $delay }) => `${$delay}ms`};

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

type RevealProps = PropsWithChildren<{ delay?: number; className?: string }>

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  return <MotionBox ref={ref} $visible={isVisible} $delay={delay} className={className}>{children}</MotionBox>
}
