import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../utils/constants";

const Monsters = () => {
  const navigate = useNavigate();
  const [monsters, setMonsters] = useState();

  useEffect(() => {
    fetch(`${API_URL}/monsters`)
      .then(response => response.json())
      .then(response => {
        //TODO: remove console log
        console.log('response', response.results);
        setMonsters(response.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (monster) => {
    const targetURL = `/monsters/${monster.index}`;
    console.log('value', targetURL);
    navigate(targetURL);
  };

  const displayMonsterList = () => {
    const monsterList = monsters.map((monster, index) => {
      return(
        <button key={index} onClick={() => handleClick(monster)}>{monster.name}</button>
      );
    });
    return monsterList;
  };

  return(
    <>
      {monsters ? 
        displayMonsterList() :
        null
      }
    </>
  )
}

export default Monsters;
