// Write your Character component here
import React from "react";
import styles from "styled-components";

export default function Character({ data }) {
  const Main = styles.div`
    
    `;

  return (
    <Main>
      {data.map((e) => {
        return (
          <Character
            name={e.name}
            status={e.status}
            species={e.species}
            img={e.img}
          />
        );
      })}
    </Main>
  );
}
