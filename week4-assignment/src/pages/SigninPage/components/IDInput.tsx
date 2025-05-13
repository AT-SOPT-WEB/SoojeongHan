import { useState } from 'react';
import Input from '@shared/components/Input/Input';
import Button from '@shared/components/Button/Button';
import ErrorMessage from '@shared/components/ErrorMessage/ErrorMessage';

interface Props {
  onNext: () => void;
}

const IDInput = ({ onNext }: Props) => {
  const [id, setId] = useState('');

  const idRegex = /^[A-Za-z0-9]+$/;

  const isValidId = id.length >= 8 && id.length <= 20 && idRegex.test(id);

  const isLengthInvalid = id.length > 20;

  return (
    <>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      
      {isLengthInvalid && (
        <ErrorMessage message="아이디는 최대 20자까지만 입력 가능합니다." />
      )}

      <Button onClick={onNext} disabled={!isValidId}>다음</Button>
    </>
  );
};

export default IDInput;
