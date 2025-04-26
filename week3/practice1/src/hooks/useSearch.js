import { useState } from 'react';

const useSearch = (members) => {
  const [search, setSearch] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const result = members.filter((member) =>
      member.name.includes(search)
    );
    setFilteredMembers(result);
  };

  return {
    search,
    filteredMembers,
    handleSearchChange,
    handleSearch,
  };
};

export default useSearch;
