import { useAtom } from "jotai"
import { atomDark } from "jotai-dark"

const isDarkAtom = atomDark({
  disableTransition: true,
  disableTransitionExclude: [".i-lucide-sun", ".i-lucide-moon"],
})

export const useDark = () => {
  const [isDark, setIsDark] = useAtom(isDarkAtom)
  return {
    isDark,
    theme: (isDark ? "dark" : "light") as "dark" | "light",
    toggleDark: setIsDark as () => void,
  }
}
