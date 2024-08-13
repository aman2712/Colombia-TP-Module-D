import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Button from "../components/button";
import Header from "../components/header";

const Disciplines = () => {
  const { disciplines } = useContext(AppContext);

  return (
    <section className="flex justify-center items-center flex-col mx-5">
      <Header backLink='/' />
      <h1 className="text-6xl my-12">Disciplines</h1>
      {disciplines.map((value, index) => (
        <Button key={index} text={value.name} imgsrc={value.image} className="mb-2 max-w-[90%]" path={`/disciplines/${value.name}`} />
      ))}
    </section>
  );
};

export default Disciplines;
