import { useState } from 'react';
import {
  wrapperStyle,
  inputStyle,
  recentKeywordStyle,
  loadingSpinnerStyle,
  errorMessageStyle
} from './GithubSearch.style';

const GithubSearch = () => {
  const [input, setInput] = useState('');
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
  const [recent, setRecent] = useState([]);

  const getUserInfo = async (user) => {
    setUserInfo({ status: 'pending', data: null });
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setUserInfo({ status: 'resolved', data });
  
      if (!recent.includes(user)) {
        const updated = [...recent];
        updated.push(user);
        if (updated.length > 3) updated.shift();
  
        setRecent(updated);
        localStorage.setItem('userList', JSON.stringify(updated));
      }
    } catch {
      setUserInfo({ status: 'rejected', data: null });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      getUserInfo(input.trim());
      setInput('');
    }
  };

  const removeProfile = () => {
    setUserInfo({ status: 'idle', data: null });
  };

  const removeRecent = (user) => {
    const updated = recent.filter((r) => r !== user);
    setRecent(updated);
    localStorage.setItem('userList', JSON.stringify(updated));
  };

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
        <>
          <h3>최근 검색어</h3>
          <div>
            {recent.map((user) => (
              <span key={user} css={recentKeywordStyle}>
                <button onClick={() => getUserInfo(user)}>{user}</button>
                <button onClick={() => removeRecent(user)}>x</button>
              </span>
            ))}
          </div>
        </>
      )}

      {userInfo.status === 'pending' && <div css={loadingSpinnerStyle}></div>}
      {userInfo.status === 'rejected' && (
        <p css={errorMessageStyle}>
          결과를 찾을 수 없습니다. 다시 시도해주세요.
        </p>
      )}
      {userInfo.status === 'resolved' && userInfo.data && (
        <div>
          <button onClick={removeProfile}>x</button>
          <a
            href={userInfo.data.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={userInfo.data.avatar_url} alt="avatar" />
          </a>
          <a
            href={userInfo.data.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{userInfo.data.name || userInfo.data.login}</h3>
          </a>
          <p>{userInfo.data.bio}</p>
          <p>팔로워: {userInfo.data.followers}</p>
          <p>팔로잉: {userInfo.data.following}</p>
        </div>
      )}
    </div>
  );
};

export default GithubSearch;
