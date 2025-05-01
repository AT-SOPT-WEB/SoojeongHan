import { useState } from 'react';

export const useGithubSearch = () => {
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
        const updated = [...recent, user];
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

  return {
    input,
    setInput,
    userInfo,
    recent,
    getUserInfo,
    handleKeyDown,
    removeProfile,
    removeRecent,
  };
};
