import { useState } from 'react';
import { getRandomAnswer } from '../utils/getRandomAnswer';

const useNumberBaseballGame = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState(getRandomAnswer());
  const [tries, setTries] = useState([]);
  const [tryCount, setTryCount] = useState(0);

  const resetGame = () => {
    setAnswer(getRandomAnswer());
    setTries([]);
    setTryCount(0);
    setMessage('');
    setInputValue('');
  };

  const handleChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!/^\d{3}$/.test(inputValue) || new Set(inputValue).size !== 3) {
        setMessage('⚠️ 서로 다른 숫자 3자리를 입력해주세요!');
        return;
      }
      const { strike, ball } = checkAnswer(inputValue, answer);
      const koreanMsg = `${strike} 스트라이크 ${ball} 볼`;
      const shortMsg = `${strike}S ${ball}B`;

      if (inputValue === answer) {
        setMessage('🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다.');
        setTries([...tries, `${inputValue} - ${shortMsg}`]);
        setTimeout(resetGame, 3000);
      } else {
        setMessage(koreanMsg);
        setTries([...tries, `${inputValue} - ${shortMsg}`]);

        const nextCount = tryCount + 1;
        setTryCount(nextCount);

        if (nextCount === 10) {
          setMessage('💥 게임 오버! 10번을 넘겨서 실패하였습니다. 게임이 초기화됩니다.');
          setTimeout(resetGame, 5000);
        }
      }

      setInputValue('');
    }
  };

  const checkAnswer = (input, answer) => {
    let strike = 0;
    let ball = 0;

    input.split('').forEach((digit, idx) => {
      if (digit === answer[idx]) strike++;
      else if (answer.includes(digit)) ball++;
    });

    return { strike, ball };
  };

  return {
    inputValue,
    message,
    tries,
    handleChange,
    handleKeyDown,
  };
};

export default useNumberBaseballGame;
