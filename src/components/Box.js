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

    img {
        width 80%
        margin-top: 1%
    }
    `;
export default function Character({ data }) {
  return (
    <Main>
      {data.map((item) => {
        return (
          <>
            <img src={item.image} className="img" alt="Character profile"></img>
            <div className="box">
              <h3>Name: {item.name}</h3>
              <p>Status: {item.status}</p>
              <p>Species: {item.species}</p>
            </div>
          </>
        );
      })}
    </Main>
  );
}
