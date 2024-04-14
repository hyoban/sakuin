import { useAtom } from "jotai";
import { atomDark } from "jotai-dark";

const isDarkAtom = atomDark({
	disableTransition: true,
	disableTransitionExclude: [".i-lucide-sun", ".i-lucide-moon"],
});

export function useDark(): {
	isDark: boolean;
	toggleDark: () => void;
	theme: "dark" | "light";
} {
	const [isDark, setIsDark] = useAtom(isDarkAtom);
	return {
		isDark,
		toggleDark: setIsDark,
		theme: isDark ? "dark" : "light",
	};
}
