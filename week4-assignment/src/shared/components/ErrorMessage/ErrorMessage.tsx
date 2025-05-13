import { errorTextStyle } from './ErrorMessage.style';

const ErrorMessage = ({ message = '오류가 발생했습니다.' }) => {
  return <div css={errorTextStyle}>{message}</div>;
};

export default ErrorMessage;
