// Create a component: A component is a function that returns JSX.
import {useState} from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';


function App() {
  const handleSubmit = (term) => {
    console.log('Do a search with', term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
