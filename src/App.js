import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import styles from "styled-components";
import Character from "./components/Character";

const Maindiv = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap; 
    `;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const API_BASE = "https://rickandmortyapi.com/api/character/";

  const [newData, setNewdata] = useState([]);
  const [isLoad, setIsload] = useState(true);

  useEffect(() => {
    Axios.get(`${API_BASE}`)
      .then((incom) => {
        // console.log(incom.data.results);
        fixedData(incom.data.results);
        setIsload(false);
      })
      .catch((err) => {
        console.log("Failed");
      });
  }, []);

  const fixedData = (temp) => {
    const tempNew = temp.map((item) => {
      return {
        name: item.name,
        status: item.status,
        species: item.species,
        img: item.image,
      };
    });
    // console.log(tempNew);
    setNewdata(tempNew);
  };

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {isLoad ? (
        "Is Loading"
      ) : (
        <Maindiv>
          <Character data={newData} />
        </Maindiv>
      )}
    </div>
  );
};

export default App;
