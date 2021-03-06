import * as React from "react";
import { Button } from '@material-ui/core';

interface Props {
  initialUserName: string;
  onNameUpdated: (newName: string) => any;
}

export const NameEditComponent: React.FC<Props> = (props) => {
  const [editingName, setEditingName] = React.useState(props.initialUserName);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated(editingName);
  };

  return (
    <>
      <label>Update name:</label>
      <input value={editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change1</button>
      <Button color="primary" onClick={onNameSubmit} >I Added Material UI Button, which works</Button>
    </>
  );
};
