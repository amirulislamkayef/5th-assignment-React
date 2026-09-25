import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { Suspense, useState } from "react";
import TechList from "./components/Technologies/TechList";
import type { Itechnology } from "./Types/Technology Type";
import Footer from "./components/Footer";

const techsFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {

  const [selectedTechs, setSelectedTechs] = useState<Itechnology[]>([]);

  const techsPromise = techsFetch();

  const handleAddToStack = (tech: Itechnology) => {

    setSelectedTechs((previous) => {
      const alreadyExists = previous.some(
        (item) => item.id === tech.id
      );

      if (alreadyExists) {
        return previous;
      }

      return [...previous, tech];
    });
  };

  const handleRemove = (id: number) => {
    setSelectedTechs((previous) =>
      previous.filter((tech) => tech.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <>
      <Nav />
      <Banner />

      <Suspense
        fallback={
          <span className="loading loading-spinner text-error"></span>
        }
      >
        <TechList
          techsPromise={techsPromise}
          selectedTechs={selectedTechs}
          onAddToStack={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;