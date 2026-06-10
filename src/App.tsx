import Hero from "./components/Hero";
import { heroes } from "./data/heroes"; 
import Blob from "./components/Blob";


export default function App() {
  return (
    <>
    <Blob />
      <Hero data={heroes[0]} />
    </>
  );
}