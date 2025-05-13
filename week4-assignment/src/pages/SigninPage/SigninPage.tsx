import { useState } from 'react';
import IDInput from '@pages/SigninPage/components/IDInput';
import PasswordInput from '@pages/SigninPage/components/PasswordInput';
import NicknameInput from '@pages/SigninPage/components/NicknameInput';
import Head from '@shared/components/Head/Head';
import theme from '@styles/theme';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  const [step, setStep] = useState(1);

  const goToNext = () => setStep((prev) => prev + 1);

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '70rem',
        gap: '2rem',
      }}
    >
      <Head title="회원가입" />
      {step === 1 && <IDInput onNext={goToNext} />}
      {step === 2 && <PasswordInput onNext={goToNext} />}
      {step === 3 && <NicknameInput />}
      <div css={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.6rem' }}>
        <p>
          이미 회원이신가요?
          <Link
            to="/"
            css={{
              fontSize: '1.8rem',
              textDecoration: 'underline',
              color: `${theme.color.purpleAccent}`,
              cursor: 'pointer',
              marginLeft: '0.8rem',
            }}
          >
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
