import React,{useState, useEffect} from "react";
import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] =  useState([
    'USA','UK','India'
  ]);

    useEffect(()=>{
      const getCountriesData = async() =>{
        await fetch ("https://disease.sh/v3/covid-19/countries")
        .then ((response) => response.json())
        .then((data) => {
          const countries = data.map((country) =>(
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
            setCountries(countries);

        })
      
      }
      getCountriesData();
    }, []);


  return (
    <div className="app">
      <div className='app_header'>
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select variant="outlined" value="abc">

        {
          countries.map(country =>(
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))
        }

          {/* <MenuItem value="worldwide">worldwide</MenuItem>
          <MenuItem value="worldwide">opt 2</MenuItem>
          <MenuItem value="worldwide">opt 3</MenuItem>
          <MenuItem value="worldwide">opt 4</MenuItem> */}
        </Select>
      </FormControl>
      </div>

     

      {/* Header */}
      {/* Title & select input dropdown field*/}

      {/* Infobxes */}
      {/* Infobxes */}
      {/* Infobxes */}

      {/* Tables */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;