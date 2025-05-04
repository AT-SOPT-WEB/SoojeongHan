import {
  wrapperStyle,
  recentWrapperStyle,
  recentKeywordStyle,
  loadingSpinnerStyle,
  errorMessageStyle,
} from './GithubSearch.style';
import { useGithubSearch } from '../../hooks/useGithubUserInfo';
import Input from '../Input/Input';
import GithubCard from '../GithubCard/GithubCard';

const GithubSearch = () => {
  const {
    input,
    setInput,
    userInfo,
    recent,
    getUserInfo,
    handleKeyDown,
    removeProfile,
    removeRecent,
  } = useGithubSearch();

  return (
    <div css={wrapperStyle}>
      {/* 깃허브 검색 */}
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Github 프로필을 검색해보세요."
      />

      {/* 최근 검색어 */}
      {recent.length > 0 && (
        <div css={recentWrapperStyle}>
          <h3>최근 검색어</h3>
          <div>
            {recent.map((user) => (
              <span key={user} css={recentKeywordStyle}>
                <button onClick={() => getUserInfo(user)}>{user}</button>
                <button
                  onClick={() => removeRecent(user)}
                  aria-label="최근 검색어 삭제"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 검색 결과 */}
      {userInfo.status === 'pending' && <div css={loadingSpinnerStyle}></div>}
      {userInfo.status === 'rejected' && (
        <p css={errorMessageStyle}>
          결과를 찾을 수 없습니다. 다시 시도해주세요.
        </p>
      )}
      {userInfo.status === 'resolved' && userInfo.data && (
        <GithubCard user={userInfo.data} onClose={removeProfile} />
      )}
    </div>
  );
};

export default GithubSearch;
