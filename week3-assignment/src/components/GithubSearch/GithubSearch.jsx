import {
  wrapperStyle,
  inputStyle,
  recentWrapperStyle,
  recentKeywordStyle,
  loadingSpinnerStyle,
  errorMessageStyle,
  cardStyle,
  imageStyle,
  closeButtonStyle,
  nameStyle,
  followInfoWrapper,
  followInfoItem,
} from './GithubSearch.style';
import { useGithubSearch } from '../../hooks/useGithubUserInfo';

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
      <input
        css={inputStyle}
        placeholder="Github 프로필을 검색해보세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

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

      {userInfo.status === 'pending' && <div css={loadingSpinnerStyle}></div>}
      {userInfo.status === 'rejected' && (
        <p css={errorMessageStyle}>
          결과를 찾을 수 없습니다. 다시 시도해주세요.
        </p>
      )}
      {userInfo.status === 'resolved' && userInfo.data && (
        <div css={cardStyle}>
          <button css={closeButtonStyle} onClick={removeProfile}>
            x
          </button>
          <a
            href={userInfo.data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="깃허브 프로필로 이동"
          >
            <img
              src={userInfo.data.avatar_url}
              alt="프로필 이미지"
              css={imageStyle}
            />
          </a>

          {userInfo.data.name && (
            <a
              href={userInfo.data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              css={nameStyle}
            >
              {userInfo.data.name}
            </a>
          )}

          {userInfo.data.login && <p css={nameStyle}>{userInfo.data.login}</p>}
          {userInfo.data.bio && <p css={nameStyle}>{userInfo.data.bio}</p>}

          <div css={followInfoWrapper}>
            <div css={followInfoItem}>
              <p>Followers</p>
              <p>{userInfo.data.followers}</p>
            </div>
            <div css={followInfoItem}>
              <p>Following</p>
              <p>{userInfo.data.following}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
