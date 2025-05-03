import { useState } from 'react';
import { fetchUserInfo } from '../utils/githubApi';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../utils/localStorage';

export const useGithubSearch = () => {
  const [input, setInput] = useState('');
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
  const [recent, setRecent] = useState(loadFromLocalStorage('userList'));

  const getUserInfo = async (user) => {
    setUserInfo({ status: 'pending', data: null });
    try {
      const data = await fetchUserInfo(user);
      setUserInfo({ status: 'resolved', data });

      if (!recent.includes(user)) {
        const updated = [...recent, user];
        if (updated.length > 3) updated.shift();

        setRecent(updated);
        saveToLocalStorage('userList', updated);
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
    saveToLocalStorage('userList', updated);
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
