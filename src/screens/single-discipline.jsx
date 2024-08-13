import { useParams, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

import Header from "../components/header";

const SingleDiscipline = () => {
  const { findDisciplineStats } = useContext(AppContext);

  const [discipline, setDiscipline] = useState();

  const { name } = useParams();  

  useEffect(() => {
    setDiscipline(findDisciplineStats(name));    
  }, []);

  return (
    <section className="flex justify-center items-center flex-col mx-5">
        <Header backLink='/disciplines' />
        <h1 className="text-6xl mt-7 mb-10 font-medium">{discipline?.name.toUpperCase()}</h1>
        <img src={discipline?.image} alt={`Symbol | ${discipline?.name}`} />
        <table className="mt-16">
            <thead>
                <tr>
                    <th className="font-medium transform-none">COUNTRY</th>
                    <th className="font-medium transform-none">MEDALS</th>
                </tr>
            </thead>
            <tbody>
                {discipline?.stats.map((stat, index) => (
                    <tr className="border-t-2 border-white" key={index}>
                        <td className="text-left pl-2 underline font-medium"><Link to={`/disciplines/${name}/${stat.countryName}`}>{stat.countryName}</Link></td>
                        <td>{stat.count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  );
};

export default SingleDiscipline;
