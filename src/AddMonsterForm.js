import React from "react";

const AddMonsterForm = (props) => {
  return (
    <div className="container-inner">
      <h2>Add Monster</h2>
      <form className="h-form" onSubmit={props.addMonster}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          type="text"
          name="editName"
          value={props.editName}
          onChange={props.handleInputChange}
        />
        <label className="h-label">Hit Dice</label>
        <input
          className="h-input"
          type="text"
          name="editHitDice"
          value={props.editHitDice}
          onChange={props.handleInputChange}
        />
        <label className="h-label">Alignment</label>
        <input
          className="h-input"
          type="text"
          name="editAlignment"
          value={props.editAlignment}
          onChange={props.handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMonsterForm;
