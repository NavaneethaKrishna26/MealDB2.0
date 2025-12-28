function FilterBar({
  searchText,
  setSearchText,
  setCategory,
  setArea,
  setDifficulty,
  setSortType,
  clearFilters,
}) {
  return (
    <div className="filter-bar" style={{ marginBottom: "20px" }}>
      {/* Search */}
     

      {/* Category */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Beef">Beef</option>
        <option value="Chicken">Chicken</option>
        <option value="Dessert">Dessert</option>
        <option value="Lamb">Lamb</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Pasta">Pasta</option>
        <option value="Pork">Pork</option>
        <option value="Seafood">Seafood</option>
        <option value="Side">Side</option>
        <option value="Starter">Starter</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Goat">Goat</option>
      </select>

      <select onChange={(e) => setArea(e.target.value)}>
        <option value="">All Cuisines</option>
        <option value="American">American</option>
        <option value="British">British</option>
        <option value="Canadian">Canadian</option>
        <option value="Chinese">Chinese</option>
        <option value="Croatian">Croatian</option>
        <option value="Dutch">Dutch</option>
        <option value="Egyptian">Egyptian</option>
        <option value="Filipino">Filipino</option>
        <option value="French">French</option>
        <option value="Greek">Greek</option>
        <option value="Indian">Indian</option>
        <option value="Irish">Irish</option>
        <option value="Italian">Italian</option>
        <option value="Jamaican">Jamaican</option>
        <option value="Japanese">Japanese</option>
        <option value="Kenyan">Kenyan</option>
        <option value="Malaysian">Malaysian</option>
        <option value="Mexican">Mexican</option>
        <option value="Moroccan">Moroccan</option>
        <option value="Polish">Polish</option>
        <option value="Portuguese">Portuguese</option>
        <option value="Russian">Russian</option>
        <option value="Spanish">Spanish</option>
        <option value="Thai">Thai</option>
        <option value="Tunisian">Tunisian</option>
        <option value="Turkish">Turkish</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>

      {/* Difficulty */}
      <select onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">All Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      {/* Sorting */}
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="">No Sorting</option>
        <option value="name">Sort by Name</option>
        <option value="ingredients">Least Ingredients</option>
      </select>

       <input
        value={searchText}
        placeholder="Search meals or ingredients..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      
      {/* Clear */}
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
}

export default FilterBar;
