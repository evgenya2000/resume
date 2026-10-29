import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    color: #202721;
    background: #f7f7f2;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-optical-sizing: auto;
    font-weight: 400;
    --color-bg: #f7f7f2;
    --color-paper: #fffefa;
    --color-ink: #202721;
    --color-muted: #737970;
    --color-green: #5a7f5b;
    --color-green-dark: #3e5d40;
    --color-brown: #624f4b;
    --color-red: #a01828;
    --color-line: rgba(32, 39, 33, 0.12);
    --page-gutter: clamp(22px, 6vw, 88px);
    --page-width: 1440px;
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 108px; }
  body { min-width: 320px; margin: 0; }
  body, button, a { font-family: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; }
  button { color: inherit; }
  ::selection { background: rgba(90, 127, 91, 0.22); }
  :focus-visible { outline: 3px solid var(--color-red); outline-offset: 4px; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
