import { useState } from "react";
import { DEVICE_OPTIONS } from "../../shared/utils";
import OptionsButton from "./sharedComponents/OptionsButton";

function DeviceSwitcher() {
  const [selectedDevice, setSelectedDevice] = useState(DEVICE_OPTIONS[0].id);

  const handleDeviceChange = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="text-white flex space-x-2">
      {DEVICE_OPTIONS.map((option) => {
        return (
          <OptionsButton
            key={option.id}
            option={option}
            isActive={selectedDevice === option.id}
            onOptionSelect={handleDeviceChange}
          />
        );
      })}
    </div>
  );
}

export default DeviceSwitcher;
