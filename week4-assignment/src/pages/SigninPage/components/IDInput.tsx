import { useState } from 'react';
import Input from '@shared/components/Input/Input';
import Button from '@shared/components/Button/Button';

interface Props {
  onNext: () => void;
}

const IDInput = ({ onNext }: Props) => {
  const [id, setId] = useState('');

  // 정규식: 영문 대소문자/숫자만 허용
  const idRegex = /^[A-Za-z0-9]+$/;

  // 길이 조건 + 정규식 모두 만족해야 유효
  const isValidId = id.length >= 8 && id.length <= 20 && idRegex.test(id);

  return (
    <>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)"
        value={id}
        onChange={(e) => setId(e.target.value)} // 아이디 입력값 변경
      />
      <Button onClick={onNext} disabled={!isValidId}>다음</Button> {/* 아이디가 유효하면 버튼 활성화 */}
    </>
  );
};

export default IDInput;
