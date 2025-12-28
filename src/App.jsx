import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import MealList from "./components/MealList";
import "./App.css";


function App() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);


  // Filters
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [sortType, setSortType] = useState("");


  // Favorites
  const [favorites, setFavorites] = useState([]);


  // Fetch meals
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then(res => res.json())
      .then(data => {
        setMeals(data.meals || []);
        setFilteredMeals(data.meals || []);
      });
  }, []);



  // Ingredient count
  const getIngredientCount = (meal) => {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) count++;
    }
    return count;
  };



  // Difficulty
  const getDifficulty = (meal) => {
    const count = getIngredientCount(meal);
    if (count <= 5) return "Easy";
    if (count <= 10) return "Medium";
    return "Hard";
  };


  
  // Toggle favorite
  const toggleFavorite = (mealId) => {
    setFavorites(prev =>
      prev.includes(mealId)
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };


  // Clear all filters
  const clearFilters = () => {
    setSearchText("");
    setCategory("");
    setArea("");
    setDifficulty("");
    setSortType("");
  };


  // Apply search + filters + sorting
  useEffect(() => {
    let result = [...meals];

    // Search (name + category + area + ingredients)
    if (searchText) {
      result = result.filter(meal => {
        const text = searchText.toLowerCase();

        if (
          meal.strMeal.toLowerCase().includes(text) ||
          meal.strCategory.toLowerCase().includes(text) ||
          meal.strArea.toLowerCase().includes(text)
        ) return true;

        for (let i = 1; i <= 20; i++) {
          if (
            meal[`strIngredient${i}`] &&
            meal[`strIngredient${i}`].toLowerCase().includes(text)
          ) return true;
        }
        return false;
      });
    }

    if (category) {
      result = result.filter(m => m.strCategory === category);
    }

    if (area) {
      result = result.filter(m => m.strArea === area);
    }

    if (difficulty) {
      result = result.filter(m => getDifficulty(m) === difficulty);
    }

    //  Sorting
    if (sortType === "name") {
      result.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
    }

    if (sortType === "ingredients") {
      result.sort(
        (a, b) => getIngredientCount(a) - getIngredientCount(b)
      );
    }

    setFilteredMeals(result);
  }, [searchText, category, area, difficulty, sortType, meals]);

  
  return (
    <div className="app-container">
      <h1>🍽️ Meal Finder Updated</h1>

      <FilterBar
        searchText={searchText}
        setSearchText={setSearchText}
        setCategory={setCategory}
        setArea={setArea}
        setDifficulty={setDifficulty}
        setSortType={setSortType}
        clearFilters={clearFilters}
      />

      <MealList
        meals={filteredMeals}
        getIngredientCount={getIngredientCount}
        getDifficulty={getDifficulty}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
