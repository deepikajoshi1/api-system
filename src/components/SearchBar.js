function SearchBar({ onSubmit }){
  const handleClick = () => {
    console.log('Do a search with', term);
onSubmit('dogs');
  };
  return(
    <div>
      <input/>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default SearchBar;
