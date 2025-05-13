import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@shared/components/Input/Input';
import Button from '@shared/components/Button/Button';
import routePath from "@routes/routhPath";

const NicknameInput = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleFinish = () => {

    navigate(routePath.MYINFO);
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
