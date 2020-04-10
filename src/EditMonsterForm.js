import React from "react";

const EditMonsterForm = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Monster</h2>
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
        <button onClick={props.updateMonster}>Update</button>
        <button onClick={() => props.setEditPanel(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditMonsterForm;
