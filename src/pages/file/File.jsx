import React from 'react';

function File() {
  const fileChangedHandler = (e) => {
    debugger;
    const fileList = e?.target?.files;
    for (let file of fileList) {
      console.log(file?.name);
    }
  };
  return (
    <div>
      <label>Select a file </label>
      <input
        type="file"
        id="myfile"
        name="myfile"
        onChange={fileChangedHandler}
        multiple
      />
    </div>
  );
}

export default File;
