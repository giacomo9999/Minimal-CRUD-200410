import React from "react";

const MonsterList = (props) => {
  const monsterTableData = props.monsterData.map((monster) => (
    <tr key={`MON +${monster.id}`}>
      <td>{monster.id}</td>
      <td>{monster.name}</td>
      <td>{monster.hitDice}</td>
      <td>{monster.alignment}</td>
      <td>
        <button onClick={() => props.editMonster(monster)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteMonster(monster.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <h1>Monster List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>HD</th>
            <th>Alignment</th>
          </tr>
        </thead>
        <tbody>{monsterTableData}</tbody>
      </table>
    </div>
  );
};

export default MonsterList;
