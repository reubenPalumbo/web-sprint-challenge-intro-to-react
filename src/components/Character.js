// Write your Character component here
import React from "react";
import styles from "styled-components";

export default function Character({ name, status, species, img }) {
  const Main = styles.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #373737;
    color: white;
    flex-flow: column nowrap; 
    border-radius: 10px;
    margin: 2% 1%;
    border: 2px solid black;

    img {
        width: 80%;
        margin-top: 3%;
        border-radius: 10px;
        border: 2px solid black;
    }
    `;

  return (
    <Main>
      <img src={img} className="img" alt="Character profile"></img>
      <div className="box">
        <h3>Name: {name}</h3>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </Main>
  );
}
