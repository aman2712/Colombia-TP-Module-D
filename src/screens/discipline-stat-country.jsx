import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

import Header from "../components/header";

const DisciplineStatCountry = () => {
  const { disciplineStatForSingleCountry } = useContext(AppContext);

  const [country, setCountry] = useState();

  const { name, countryName } = useParams();

  useEffect(() => {
    setCountry(disciplineStatForSingleCountry(name, countryName));
  }, []);

  return (
    <section className="flex justify-center items-center flex-col mx-5">
        <Header backLink={`/disciplines/${name}`} />
        <h1 className="text-6xl mt-10 mb-5 font-medium">{name.toUpperCase()}</h1>
        <img src={country?.image} alt={`Image | ${name}`} />
        <h1 className="text-5xl mt-10 font-medium">{country?.name}</h1>
        <table className="mt-10">
            <thead>
                <tr>
                    <th>GOLD</th>
                    <th>SILVER</th>
                    <th>BRONZE</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{country?.gold}</td>
                    <td>{country?.silver}</td>
                    <td>{country?.bronze}</td>
                    <td>{String(country?.gold + country?.silver + country?.bronze)}</td>
                </tr>
            </tbody>
        </table>
    </section>
  );
};

export default DisciplineStatCountry
