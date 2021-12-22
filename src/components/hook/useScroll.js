import { useEffect, useState } from "react";
export function useScroll() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
	}, [scrollY]);

	return scrollY;
}
