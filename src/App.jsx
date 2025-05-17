import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <CoreConcept data={CORE_CONCEPTS} />

      <Examples />
      </main>
    </div>
  );
}

export default App;
