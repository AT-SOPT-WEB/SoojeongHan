import useNumberBaseballGame from '../../hooks/useNumberBaseballGame';
import { wrapperStyle, inputStyle, messageStyle, listStyle } from './NumberBaseballGame.style';

const NumberBaseballGame = () => {
  const { inputValue, message, tries, handleChange, handleKeyDown } = useNumberBaseballGame();

  return (
    <div css={wrapperStyle}>
      <input
        css={inputStyle}
        placeholder="3자리 숫자를 입력해주세요."
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div css={messageStyle}>{message}</div>
      <ul css={listStyle}>
        {tries.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberBaseballGame;
