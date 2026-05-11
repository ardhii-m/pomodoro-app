import PropTypes from "prop-types";
import { BiCheck } from "react-icons/bi";

function CheckButton({ id, onCheck, checked }) {
  return (
    <button
      onClick={() => onCheck(id)}
      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
        checked ? "bg-[#FF6B6B] border-[#FF6B6B] text-white" : "border-gray-300 text-transparent"
      }`}
    >
      <BiCheck size={20} />
    </button>
  );
}

CheckButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onCheck: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CheckButton;
