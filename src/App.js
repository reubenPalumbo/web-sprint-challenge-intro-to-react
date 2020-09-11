import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Box from "./components/Box";
import styles from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const API_BASE = "https://rickandmortyapi.com/api/character/";

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
    const tempNew = temp.map((item) => {
      return {
        name: item.name,
        status: item.status,
        species: item.species,
        img: item.image,
      };
    });
    console.log(tempNew);
    setNewdata(tempNew);
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
        <Box data={newData} />
      </Maindiv>
    </div>
  );
};

export default App;
