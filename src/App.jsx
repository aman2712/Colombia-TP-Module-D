import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext";

import Home from "./screens/home";
import Countries from "./screens/countries";
import SingleCountry from "./screens/single-country";
import MedalStats from "./screens/medal-stats";
import Disciplines from "./screens/disciplines";
import SingleDiscipline from "./screens/single-discipline";
import DisciplineStatCountry from "./screens/discipline-stat-country";

function App() {
  return (
    <AppProvider>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/country/:name" element={<SingleCountry />} />
            <Route path="/country/:name/:medal" element={<MedalStats />} />
            <Route path="/disciplines" element={<Disciplines />} />
            <Route path="/disciplines/:name" element={<SingleDiscipline />} />
            <Route path="/disciplines/:name/:countryName" element={<DisciplineStatCountry />} />
          </Routes>
        </Router>
      </main>
    </AppProvider>
  );
}

export default App;
