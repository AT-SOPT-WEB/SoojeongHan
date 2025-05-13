import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  inputWrapperStyle,
  labelStyle,
  inputStyle,
  iconStyle,
} from './Input.style';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleVisibility?: boolean;
}

const Input = ({
  label,
  placeholder = '입력하세요',
  type = 'text',
  value,
  onChange,
  toggleVisibility = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const shouldToggle = isPassword && toggleVisibility;

  const inputType = isPassword
    ? showPassword && toggleVisibility
      ? 'text'
      : 'password'
    : 'text';

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div css={inputWrapperStyle}>
      {label && <label css={labelStyle}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <input
          type={inputType}
          css={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {shouldToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            css={iconStyle}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
