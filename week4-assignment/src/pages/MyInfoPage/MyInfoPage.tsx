import { useState } from 'react';
import Button from '@shared/components/Button/Button';
import Head from '@shared/components/Head/Head';
import Input from '@shared/components/Input/Input';

const MyInfoPage = () => {
  const [nickname, setNickname] = useState('');
  
  // 새 닉네임 입력 값 변경 처리
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  // 닉네임 값이 없으면 버튼 비활성화
  const isButtonDisabled = nickname.trim().length === 0;

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '70rem',
        gap: '2rem',
      }}
    >
      <Head title="내 정보 수정하기" />
      <Input
        label="새 닉네임"
        placeholder="새 닉네임을 입력하세요"
        value={nickname}
        onChange={handleNicknameChange}
      />
      <Button disabled={isButtonDisabled}>저장</Button>
    </div>
  );
};

export default MyInfoPage;
