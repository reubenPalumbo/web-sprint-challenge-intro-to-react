import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Character from "./components/Character";
import styles from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const API_BASE = "https://rickandmortyapi.com/api/character/?page=1";

  function Main() {
    const [temp, setTemp] = useState(null);
    const [newData, setNewdata] = useState([]);
    useEffect(() => {
      Axios.get(`${API_BASE}`)
        .then((incom) => {
          // console.log(incom.data.results);
          setTemp(incom.data.results);
        })
        .catch((err) => {
          console.log("Failed");
        });
    }, []);
    // console.log(temp);
    if (temp !== null) {
      const tempData = temp.map((item) => {
        return {
          name: item.name,
          status: item.status,
          species: item.species,
          img: item.image,
        };
      });
      console.log(tempData);
      setNewdata(tempData);
    }
    return newData;
  }

  const Maindiv = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap; 
    `;

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Maindiv>
        {Main().map((item) => {
          console.log("Worked");
          debugger;
          return (
            <Character
              name={item.name}
              status={item.status}
              species={item.species}
              img={item.image}
            />
          );
        })}
      </Maindiv>
    </div>
  );
};

export default App;
