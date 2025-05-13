import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@shared/components/Input/Input';
import Button from '@shared/components/Button/Button';

const NicknameInput = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleFinish = () => {
    // 회원가입 완료 처리 로직 추가
    navigate('/');
  };

  const isValid = nickname.trim().length > 0;

  return (
    <>
      <Input
        label="닉네임"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Button onClick={handleFinish} disabled={!isValid}>
        회원가입 하기
      </Button>
    </>
  );
};

export default NicknameInput;
