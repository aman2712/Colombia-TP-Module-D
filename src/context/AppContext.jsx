import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [disciplines, setDisciplines] = useState([])

  // function to fetch data from json server at load of application
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/countries", {
      method: "GET",
    });
    const resp = await response.json();
    setData(resp);
  };

  // function to load only countries data in a systematic way, with only name and image
  const findCountries = () => {
    if (data.length > 0) {
      data.forEach((country) => {
        const imgSplit = country.flag.split("/");

        const newCountry = {
          name: country.name,
          flag: "/images/flags/" + imgSplit[1],
        };

        setCountries((prev) => {
          return [...prev, newCountry];
        });
      });
    }
  };

  // function to find one single country with their name
  const findSingleCountry = (name) => {        
    const country = data.find((country) => country.name === name);    
    return country
  };

  // function to find the medal stats of each country (combined value in each discipline)
  const findMedalStats = (countryName, medal) => {
    const country = data.find((country) => country.name === countryName);
    const imgSplit = country.flag.split("/");
    let formattedCountry = {
      name: country.name,
      flag: "/images/flags/" + imgSplit[1],
      disciplines: [],
      sum: 0
    }
    country.disciplines.forEach(discipline => {
      formattedCountry.disciplines.push({
        name: discipline.name,
        count: medal === 'gold' ? discipline.gold : medal === 'silver' ? discipline.silver : medal === 'bronze' ? discipline.bronze : 0
      })
      formattedCountry.sum += medal === 'gold' ? discipline.gold : medal === 'silver' ? discipline.silver : medal === 'bronze' ? discipline.bronze : 0
    })
    return formattedCountry
  }

  // function to find and store list of all disciplines (name and image) at load of application
  const getListOfDisciplines = () => {
    const disciplinesList = []
    data.forEach(country => {
      country.disciplines.forEach(discipline => {
        if(!disciplinesList.some(value => value.name === discipline.name)){     
          const imgSplit = discipline.image.split('/')     
          disciplinesList.push({
            name: discipline.name,
            image: '/images/disciplines/' + imgSplit[1],
          })
        }
      })
    })
    setDisciplines(disciplinesList)
  }

  // function to find the discipline statistics of each country based on discipline name
  const findDisciplineStats = (name) => {    
    const discipline = disciplines.find((discipline) => discipline.name === name)
    const disciplineStats = {
      name,
      image: discipline.image,
      stats: []
    }
      data.forEach(country => {
        country.disciplines.forEach(countryDiscipline => {          
          if(countryDiscipline.name === name){
            disciplineStats.stats.push({countryName: country.name, count: countryDiscipline.gold + countryDiscipline.silver + countryDiscipline.bronze})
          }
        })
      })    
    return disciplineStats
  }

  // function to find discipline stats for one single country
  const disciplineStatForSingleCountry = (name, countryName) => {
    const country = data.find((country) => country.name === countryName);
    const discipline = disciplines.find((discipline) => discipline.name === name)

    const statData = {
      name: country.name,
      image: discipline.image
    }
    country.disciplines.forEach(discipline => {
      if(discipline.name === name){
        statData.gold = discipline.gold,
        statData.silver = discipline.silver,
        statData.bronze = discipline.bronze
      }
    })

    return statData
  }

  // useEffect function which loads formatted countries and disciplines everytime data array changes
  useEffect(() => {
    findCountries();
    getListOfDisciplines()
  }, [data]);

  // function to load raw countries data from server on load
  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    data,
    countries,
    findCountries,
    findSingleCountry,
    findMedalStats,
    disciplines,
    findDisciplineStats,
    disciplineStatForSingleCountry
  };

  return (
    data.length === 0  || disciplines.length === 0 ? <p>Loading...</p> : (
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
  );
};
