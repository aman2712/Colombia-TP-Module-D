import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

import Header from "../components/header";

const MedalStats = () => {
  const { findMedalStats } = useContext(AppContext);

  const [country, setCountry] = useState();

  const { name, medal } = useParams();

  useEffect(() => {
    setCountry(findMedalStats(name, medal));    
  }, []);

  return (
    <section className="flex justify-center items-center flex-col mx-5">
        <Header backLink={`/country/${name}`} />
        <h1 className="text-6xl mt-7 mb-5">{country?.name}</h1>
        <img src={country?.flag} alt={`Flag | ${country?.name}`} />
        <h3 className="text-3xl mt-7">{medal.toUpperCase()} MEDALS</h3>
        <h1 className="text-8xl mb-5 font-extrabold">{country?.sum}</h1>
        <table className="mt-10">
            <thead>
                <tr>
                    <th className="font-medium transform-none">DISCIPLINE</th>
                    <th className="font-medium transform-none">MEDALS</th>
                </tr>
            </thead>
            <tbody>
                {country?.disciplines.map((discipline, index) => (
                    <tr className="border-t-2 border-white" key={index}>
                        <td>{discipline.name}</td>
                        <td>{discipline.count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  );
};

export default MedalStats;
