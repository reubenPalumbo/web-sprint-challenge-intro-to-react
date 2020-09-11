// Write your Character component here
import React from "react";
import styles from "styled-components";

const Main = styles.div`
    width: 30%;
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
        margin-top: 5%;
        border-radius: 10px;
        border: 2px solid black;
    }
    `;
export default function Character({ data }) {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <Main key={item.id}>
              <img src={item.img} className="img" alt="Character profile"></img>
              <div className="box">
                <h3>Name: {item.name}</h3>
                <p>Status: {item.status}</p>
                <p>Species: {item.species}</p>
              </div>
            </Main>
          </>
        );
      })}
    </>
  );
}
