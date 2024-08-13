import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

import Button from "../components/button";
import Header from "../components/header";

const SingleCountry = () => {
  const { findSingleCountry } = useContext(AppContext);

  const [country, setCountry] = useState();

  const { name } = useParams();

  useEffect(() => {
    setCountry(findSingleCountry(name));
  }, []);

  return (
    <section className="flex justify-center items-center flex-col mx-5">
        <Header backLink='/countries' />
        <h1 className="text-6xl mt-7 mb-5 font-medium">{country?.name}</h1>
        <img src={`/images/flags/${country?.flag?.split('/')[1]}`} alt={`Flag | ${country?.name}`} />
        <table className="mt-16">
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
                    <td>{country?.medals.gold}</td>
                    <td>{country?.medals.silver}</td>
                    <td>{country?.medals.bronze}</td>
                    <td>{String(country?.medals.gold + country?.medals.silver + country?.medals.bronze)}</td>
                </tr>
            </tbody>
        </table>
        <Button imgsrc='/images/medals/gold.png' text='Medals' className="mt-16 max-w-[90%]" path={`/country/${country?.name}/gold`} />
        <Button imgsrc='/images/medals/silver.png' text='Medals' className="mt-2 max-w-[90%]" path={`/country/${country?.name}/silver`} />
        <Button imgsrc='/images/medals/bronze.png' text='Medals' className="mt-2 max-w-[90%]" path={`/country/${country?.name}/bronze`} />
    </section>
  );
};

export default SingleCountry;
