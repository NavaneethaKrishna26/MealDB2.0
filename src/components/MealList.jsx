import MealCard from "./MealCard";

function MealList({
  meals,
  getIngredientCount,
  getDifficulty,
  toggleFavorite,
  favorites
}) {
  if (meals.length === 0) {
    return <p className="no-results">No meals match your filters.</p>;
  }

  return (
    <div className="meal-list">
      {meals.map(meal => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
          ingredientCount={getIngredientCount(meal)}
          difficulty={getDifficulty(meal)}
          isFavorite={favorites.includes(meal.idMeal)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default MealList;
