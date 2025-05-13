import { useState } from 'react';
import Button from '@shared/components/Button/Button';
import Head from '@shared/components/Head/Head';
import Input from '@shared/components/Input/Input';

const MySearchPage = () => {
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '70rem',
        gap: '2rem',
      }}
    >
      <Head title="SOPT회원 조회하기" />
      <Input
        label="닉네임"
        placeholder="검색할 닉네임을 입력하세요"
        value={nickname}
        onChange={handleNicknameChange}
      />
      <Button disabled={!nickname}>확인</Button>
    </div>
  );
};

export default MySearchPage;
