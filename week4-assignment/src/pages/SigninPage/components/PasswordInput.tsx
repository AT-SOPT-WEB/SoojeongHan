import { useState } from 'react';
import Input from '@shared/components/Input/Input';
import Button from '@shared/components/Button/Button';

interface Props {
  onNext: () => void;
}

const PasswordInput = ({ onNext }: Props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isValid = password.trim() !== '' && confirmPassword.trim() !== '';

  return (
    <>
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        toggleVisibility={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={onNext} disabled={!isValid}>
        다음
      </Button>
    </>
  );
};

export default PasswordInput;
