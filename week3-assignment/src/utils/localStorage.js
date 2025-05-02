export const saveToLocalStorage = (key, list) => {
  localStorage.setItem(key, JSON.stringify(list));
};

export const loadFromLocalStorage = (key) => {
  const storedList = localStorage.getItem(key);
  return storedList ? JSON.parse(storedList) : [];
};