import { useState, useEffect } from "react";

export default function Autocomplit({ searchValue, history }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setFilteredSuggestions([]);
  };

  useEffect(() => {
    searchValue
      ? setFilteredSuggestions(
          history.filter((item) =>
            item.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setFilteredSuggestions([]);
  }, [searchValue]);

  return (
    <>
      {filteredSuggestions && filteredSuggestions.length > 0 && (
        <ul className="AutocompleteList">
          {filteredSuggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="AutocompleteItem"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
