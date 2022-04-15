import React from 'react';

function Select() {
  const readFormControls = (formControls) => {
    const returnedData = [];
    for (let i = 0; i < formControls.length; i++) {
      const _ctr = formControls[i];
      const ctrName = _ctr?.name;
      const ctrType = _ctr.type;
      let ctrValue = null;
      switch (ctrType) {
        case 'checkbox':
          ctrValue = _ctr?.checked;
          break;
        default:
          break;
      }
      if (ctrName && ctrValue) {
        returnedData.push({
          name: ctrName,
          value: ctrValue,
        });
      }
    }
    return returnedData;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    const formControls = event.target;
    console.log(readFormControls(formControls));
  };

  return (
    <div>
      <h2>Checkbox</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="checkbox" name="vehicle1" id="vehicle1" value="Bike" />
        <label htmlFor="vehicle1"> I have a bike</label>
        <br />
        <input type="checkbox" name="vehicle2" id="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> I have a car</label>
        <br />
        <input type="checkbox" name="vehicle3" id="vehicle3" value="Boat" />
        <label htmlFor="vehicle3"> I have a Boat</label>
        <br />
        <label htmlFor="username">User name</label>
        <br />
        <input type="text" required name="username" id="username" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Select;
