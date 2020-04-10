import React, { Component } from "react";
import MonsterList from "./MonsterList";
import AddMonsterForm from "./AddMonsterForm";
import EditMonsterForm from "./EditMonsterForm";

import "./App.css";

class App extends Component {
  state = {
    editPanelOpen: false,
    editID: null,
    editName: "",
    editHitDice: "",
    editAlignment: "",

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

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addMonster = (e) => {
    e.preventDefault();
    const newMonster = {
      id: this.state.monsterData.length + 1,
      name: this.state.editName,
      hitDice: this.state.editHitDice,
      alignment: this.state.editAlignment,
    };
    this.setState({
      editName: "",
      editHitDice: "",
      editAlignment: "",
      monsterData: [...this.state.monsterData, newMonster],
    });
  };

  setEditPanel = (value) => {
    console.log(`setEditPanel: ${value}`);
    this.setState({ editPanelOpen: value });
  };

  editMonster = (monster) => {
    console.log(`editMonster....${monster.name}`);
    this.setEditPanel(true);
    this.setState({
      editId: monster.id,
      editName: monster.name,
      editHitDice: monster.hitDice,
      editAlignment: monster.alignment,
    });
  };

  deleteMonster = (id) => {
    console.log(`deleteMonster....${id}`);
    const revisedMonsterData = this.state.monsterData.filter(
      (monster) => monster.id !== id
    );
    this.setState({ monsterData: revisedMonsterData });
  };

  updateMonster = (e) => {
    e.preventDefault();
    const updatedMonster = {
      id: this.state.editId,
      name: this.state.editName,
      hitDice: this.state.editHitDice,
      alignment: this.state.editAlignment,
    };
    const newMonsterList = this.state.monsterData.map((monster) =>
      monster.id === updatedMonster.id ? updatedMonster : monster
    );
    this.setState({
      editPanelOpen: false,
      editID: null,
      editName: "",
      editHitDice: "",
      editAlignment: "",
      monsterData: newMonsterList,
    });
  };

  render() {
    return (
      <div className="container-outer">
        <MonsterList
          monsterData={this.state.monsterData}
          deleteMonster={this.deleteMonster}
          editMonster={this.editMonster}
        />
        {this.state.editPanelOpen ? (
          <EditMonsterForm
            editName={this.state.editName}
            editHitDice={this.state.editHitDice}
            editAlignment={this.state.editAlignment}
            handleInputChange={this.handleInputChange}
            setEditPanel={this.setEditPanel}
            updateMonster={this.updateMonster}
          />
        ) : (
          <AddMonsterForm
            editName={this.state.editName}
            editHitDice={this.state.editHitDice}
            editAlignment={this.state.editAlignment}
            handleInputChange={this.handleInputChange}
            addMonster={this.addMonster}
          />
        )}
      </div>
    );
  }
}

export default App;
