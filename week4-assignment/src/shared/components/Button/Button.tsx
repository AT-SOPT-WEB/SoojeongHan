import { buttonStyle } from '@shared/components/Button/Button.style';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <button css={buttonStyle(disabled)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
