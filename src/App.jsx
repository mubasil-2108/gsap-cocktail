import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { Aboutus, Art, Cocktails, Hero, Menu, Navbar } from "./components"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
			<Aboutus />
			<Art />
			<Menu />
		</main>
	)
}

export default App
