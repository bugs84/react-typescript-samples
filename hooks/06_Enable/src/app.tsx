import * as React from "react";
import {HelloComponent} from "./hello";
import {NameEditComponent} from "./nameEdit";

export const App = () => {
        const [name, setName] = React.useState("defaultUserName");
        const [editingName, setEditingName] = React.useState("defaultUserName");
        const [cause, setCause] = React.useState("");

        const loadUsername = () => {
            setTimeout(() => {
                setName("name from async call");
                setEditingName("name from async call");
                setCause("");
            }, 500);
        };

        React.useEffect(() => {
            loadUsername();
        }, []);

        const setUsernameState = () => {
            setName(editingName);
        };

        function changeButtonDisabled(): boolean {
            if (editingName === "") {
                return true
            }
            if (editingName === name) {
                return true
            }

            if (!/[a-zA-Z]/.test(editingName)) { // must contains letter
                // setCause("Must contain character")
                return true
            }
            if (!/[0-9]/.test(editingName)) { // must contains number
                // setCause("Must contain number")
                return true
            }
            if (!/[.,@_]/.test(editingName)) { // must contains special character
                // setCause("Must contain special char (.,@_)")
                return true
            }
            // setCause("")
            return false
        }

        function generateCause(): string {
            if (!/[a-zA-Z]/.test(editingName)) { // must contains letter
                return "Must contain character"

            }
            if (!/[0-9]/.test(editingName)) { // must contains number
                return "Must contain number"
            }
            return "NO CAUSE"
        }


        return (
            <>
                <HelloComponent userName={name}/>
                <NameEditComponent
                    initialUserName={name}
                    editingName={editingName}
                    onNameUpdated={setUsernameState}
                    onEditingNameUpdated={setEditingName}
                    disabled={changeButtonDisabled()}
                    cause={generateCause()}
                />
            </>
        );
    }
;
