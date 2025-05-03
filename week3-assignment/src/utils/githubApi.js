export const fetchUserInfo = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  if (!response.ok) throw new Error('User not found');
  return response.json();
};