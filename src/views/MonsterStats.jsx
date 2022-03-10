import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../utils/constants";

const MonsterStats = () => {
  const { monsterIndex } = useParams();
  const [monster, setMonster] = useState();

  useEffect(() => {
    fetch(`${API_URL}/monsters/${monsterIndex}`)
      .then(response => response.json())
      .then(response => {
        console.log('monsterStat response', response);
        if (response.index) {
          setMonster(response);
        }
      })
      .catch((error) => console.error(error));
  }, [monsterIndex]);

  const monsterSpeed = (speedStats) => {
    const keys = Object.keys(speedStats);
    console.log('keys', keys);
    const speedTypes = keys.map((key, index) => {
      return(
        <div key={index}>{`${key} : ${speedStats[key]}`}</div>
      );
    });
    return speedTypes;
  };

  const monsterSpecialAbilities = (specialAbilities) => {
    console.log('special abilities', specialAbilities);
    const spAbilities = specialAbilities.map((ability, index) => {
      return(
          <div key={index}>{`${ability.name} - ${ability.desc}`}</div>
      );
    });
    return spAbilities;
  };

  const displayMonsterStats = () => {
    return(
      <>
        <div>{monster.name}</div>
        <div>{monsterSpeed(monster.speed)}</div>
        <div>{monsterSpecialAbilities(monster.special_abilities)}</div>
      </>
    )
  };

  return(
    <>
      {monster ?
        displayMonsterStats() :
        null
      }
    </>
  );
};

export default MonsterStats;
