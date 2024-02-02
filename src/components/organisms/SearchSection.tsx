import React, { useState } from 'react';
import SearchBox from '../molecules/SearchBox';

type Props = {
  placeholder?: string;
  onSearch: (search: string) => void;
  result?: Array<string>;
};

const SearchSection: React.FC<Props> = ({ placeholder, onSearch, result }) => {
  return (
    <section className="tma-search-section">
      <SearchBox placeholder={placeholder} onSearch={onSearch} />
      <div className="tma-search-section__result">{result}</div>
    </section>
  );
};

export default SearchSection;
