import { useState } from 'react';
import Input from '@shared/components/Input/Input';
import Button from '@shared/components/Button/Button';
import ErrorMessage from '@shared/components/ErrorMessage/ErrorMessage';

interface Props {
  onNext: () => void;
}

const PasswordInput = ({ onNext }: Props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validate = (pw: string, confirmPw: string) => {
    if (pw.length > 20) {
      return '최대 길이는 20자 이하로 입력해주세요.';
    }
    if (pw && confirmPw && pw !== confirmPw) {
      return '비밀번호가 일치하지 않아요.';
    }
    return null;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPw = e.target.value;
    setPassword(newPw);
    setError(validate(newPw, confirmPassword));
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPw = e.target.value;
    setConfirmPassword(newConfirmPw);
    setError(validate(password, newConfirmPw));
  };

  const isValid =
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    !error;

  return (
    <>
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        toggleVisibility={true}
        value={password}
        onChange={handlePasswordChange}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {error && <ErrorMessage message={error} />}

      <Button onClick={onNext} disabled={!isValid}>
        다음
      </Button>
    </>
  );
};

export default PasswordInput;
