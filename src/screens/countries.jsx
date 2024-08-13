import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import Button from "../components/button";
import Header from "../components/header";

const Countries = () => {
  const { countries } = useContext(AppContext);

  return (
    <section className="flex justify-center items-center flex-col">
      <Header backLink='/' />
      <h1 className="text-6xl mt-7 mb-10 font-medium">Countries</h1>
      {countries.map((country, index) => (
        <Button
          imgsrc={country.flag}
          key={index}
          text={country.name}
          className="mt-2 max-w-[80%]"
          path={`/country/${country.name}`}
        />
      ))}
    </section>
  );
};

export default Countries;
