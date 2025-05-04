import { inputStyle } from './Input.style';

const Input = ({ value, onChange, onKeyDown, placeholder }) => {
  return (
    <input
      css={inputStyle}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default Input;
