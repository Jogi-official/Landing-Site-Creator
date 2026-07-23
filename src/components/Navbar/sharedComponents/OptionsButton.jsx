function OptionsButton({ option, isActive, onOptionSelect }) {
  return (
    <button
      className={`border-2  border-violet-500 rounded-md px-4 py-2 ${isActive ? " bg-violet-600/40" : ""}`}
      onClick={() => onOptionSelect(option.id)}
    >
      {option.icon}
    </button>
  );
}

export default OptionsButton;
