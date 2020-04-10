import React, { Component } from "react";
import MonsterList from "./MonsterList";
import AddMonsterForm from "./AddMonsterForm";
import EditMonsterForm from "./EditMonsterForm";

import "./App.css";

class App extends Component {
  state = {
    tempData: {
      editPanelOpen: false,
      editID: null,
      editName: "",
      editHitDice: "",
      editAlignment: "",
    },
    monsterData: [
      { id: 1, name: "Axe Beak", hitDice: "3", alignment: "Neutral" },
      {
        id: 2,
        name: "Beholder",
        hitDice: "45-75 hp",
        alignment: "Lawful Evil",
      },
      { id: 3, name: "Carrion Crawler", hitDice: "3+1", alignment: "Neutral" },
      { id: 4, name: "Djinni", hitDice: "7+3", alignment: "Chaotic Good" },
    ],
  };

  handleInputUpdate = () => {};

  addMonster = (monster) => {};

  editMonster = (id) => {
    console.log(`editMonster....${id}`);
    this.setState({ tempData: { editPanelOpen: true } });
    console.log(this.state.tempData);
  };

  deleteMonster = (id) => {
    console.log(`deleteMonster....${id}`);
    const revisedMonsterData = this.state.monsterData.filter(
      (monster) => monster.id !== id
    );
    this.setState({ monsterData: revisedMonsterData });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>APP</h1>
        <MonsterList
          monsterData={this.state.monsterData}
          deleteMonster={this.deleteMonster}
          editMonster={this.editMonster}
        />
        {this.state.tempData.editPanelOpen ? (
          <EditMonsterForm handleInputUpdate={this.handleInputUpdate} />
        ) : (
          <AddMonsterForm
            handleInputUpdate={this.handleInputUpdate}
            addMonster={this.addMonster}
          />
        )}
      </div>
    );
  }
}

export default App;
