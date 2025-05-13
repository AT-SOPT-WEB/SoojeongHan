import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@shared/components/Button/Button';
import Head from '@shared/components/Head/Head';
import Input from '@shared/components/Input/Input';
import theme from '@styles/theme';
import routePath from "@routes/routhPath";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 아이디와 비밀번호 모두 입력되었는지 체크
  const isFormValid = username && password;

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '70rem',
        gap: '2rem',
      }}
    >
      <Head title="로그인" />
      <Input 
        placeholder="아이디" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} // 아이디 입력값 변경
      />
      <Input 
        type="password" 
        placeholder="비밀번호" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력값 변경
      />
      <Button disabled={!isFormValid}>로그인</Button> {/* 입력값이 없으면 버튼 비활성화 */}

      <div css={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link
          to={routePath.SIGNIN}
          css={{
            fontSize: '1.8rem',
            textDecoration: 'underline',
            color: `${theme.color.purpleAccent}`,
            cursor: 'pointer',
          }}
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
