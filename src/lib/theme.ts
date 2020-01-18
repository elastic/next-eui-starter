/**
 * The functions here are for tracking and setting the current theme.
 * localStorage is used to store the currently preferred them, though
 * that doesn't work on the server, where we just use a default.
 */

const selector = `link[data-name="eui-theme"]`
const defaultTheme = `light`

function getThemes(): HTMLLinkElement[] {
  // @ts-ignore: We need to target the compiler to es6 or higher for NodeListOf<Element> to be iterable
  return [...document.querySelectorAll(selector)]
}

export function setTheme(name: string): void {
  localStorage.setItem('theme', name)

  for (const theme of getThemes()) {
    theme.disabled = theme.dataset.theme !== name
  }
}

export function getTheme(): string {
  const storedTheme = localStorage.getItem('theme')

  return storedTheme || defaultTheme
}

export function setInitialTheme(): string {
  if (typeof window !== 'object') {
    return defaultTheme
  }

  const theme = getTheme()
  setTheme(theme)
  return theme
}
