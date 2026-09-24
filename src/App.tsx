import Nav from "./components/Nav"
import Banner from "./components/Banner"
import { Suspense } from "react"
import TechList from "./components/Technologies/TechList"
import type { Itechnology } from "./Types/Technology Type"
import Footer from "./components/Footer"


const techsFetch = async ():Promise<Itechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json()
  return data;
}

function App() {
  const techsPromise = techsFetch()

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>

    <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
    <TechList techsPromise={techsPromise}></TechList>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
