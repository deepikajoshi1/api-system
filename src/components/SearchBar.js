import { useState } from 'react';
function SearchBar({ onSubmit }) {
  const[term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('dogs');
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}
export default SearchBar;
