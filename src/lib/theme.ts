export type Theme = 'light' | 'dark'

const selector = `link[data-name="eui-theme"]`
const defaultTheme: Theme = `light`

function getThemes(): HTMLLinkElement[] {
  // @ts-ignore: We need to target the compiler to es6 or higher for NodeListOf<Element> to be iterable
  return [...document.querySelectorAll(selector)]
}

export function setTheme(name: Theme): void {
  localStorage.setItem('theme', name)

  for (const theme of getThemes()) {
    theme.disabled = theme.dataset.theme !== name
  }
}

export function getTheme(): Theme {
  const storedTheme = localStorage.getItem('theme') as Theme | null

  return storedTheme || defaultTheme
}

export function setInitialTheme(): Theme {
  if (typeof window !== 'object') {
    return defaultTheme
  }

  const theme = getTheme()
  setTheme(theme)
  return theme
}
