import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { Aboutus, Cocktails, Hero, Navbar } from "./components"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
			<Aboutus />
		</main>
	)
}

export default App
