import { FILE_ACTIONS } from "../../shared/utils";
import OptionsButton from "./sharedComponents/OptionsButton";
import { useState } from "react";

function NavbarActions() {
  const [selectedAction, setSelectedAction] = useState(FILE_ACTIONS[0].id);

  const handleActionChange = (action) => {
    // console.log(action);
    setSelectedAction(action);
  };

  return (
    <div className="text-white flex space-x-2">
      {FILE_ACTIONS.map((action) => {
        return (
          <OptionsButton
            key={action.id}
            option={action}
            onOptionSelect={handleActionChange}
          />
        );
      })}
    </div>
  );
}

export default NavbarActions;
