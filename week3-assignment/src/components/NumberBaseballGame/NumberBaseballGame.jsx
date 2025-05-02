import {
  wrapperStyle,
  messageStyle,
  listStyle,
} from './NumberBaseballGame.style';
import useNumberBaseballGame from '../../hooks/useNumberBaseballGame';
import Input from '../Input/Input';

const NumberBaseballGame = () => {
  const { inputValue, message, tries, handleChange, handleKeyDown } =
    useNumberBaseballGame();

  return (
    <div css={wrapperStyle}>
      {/* 숫자 입력 */}
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="3자리 숫자를 입력해주세요."
      />

      {/* 입력에 대한 정보 */}
      {message && <h2 css={messageStyle}>{message}</h2>}

      {/* 게임 진행 상황 */}
      {tries.length > 0 && (
        <ul css={listStyle}>
          {tries.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NumberBaseballGame;
