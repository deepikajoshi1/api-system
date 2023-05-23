// Create a component: A component is a function that returns JSX.
import SearchBar from './components/SearchBar';

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
