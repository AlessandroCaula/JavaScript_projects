import Hero from "./components/Hero"
import About from "./components/About"

const App = () => {
  return (
    // min-h-screen => The minimum height of the screen will be the 100% of the screen height
    // w-screen => The width of the screen will be the 100% of the screen width
    // overflow-x-hidden => The horizontal scrollbar will be hidden
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      
      <About />
      
    </main>
  )
}

export default App