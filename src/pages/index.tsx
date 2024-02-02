import React, { useState, useEffect } from 'react';
import CharactersSection from '@/components/organisms/SearchSection';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const onSearch = async () => {
      const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const meals = await response.json();
      setResult(meals);
    };
    onSearch();
  }, [search]);
  console.log(result);

  return (
    <main>
      <CharactersSection placeholder="Search meal" onSearch={setSearch} result={[search]} />
    </main>
  );
};

export default Home;
