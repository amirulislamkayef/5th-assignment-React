import Nav from "./components/Nav"
import Banner from "./components/Banner"
import { Suspense } from "react"

function App() {
  

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>

    <Suspense fallback={<h2>Loading...</h2>}>

    </Suspense>
    </>
  )
}

export default App
