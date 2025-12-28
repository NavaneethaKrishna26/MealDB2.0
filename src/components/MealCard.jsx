function MealCard({
  meal,
  ingredientCount,
  difficulty,
  isFavorite,
  toggleFavorite
}) {
  return (
    <div className="meal-card" style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px"
    }}>
      <h3>{meal.strMeal}</h3>

      <img src={meal.strMealThumb} width="200" alt={meal.strMeal} />

      <p>Category: {meal.strCategory}</p>
      <p>Cuisine: {meal.strArea}</p>
      <p>Ingredients: {ingredientCount}</p>
      <p>Difficulty: {difficulty}</p>

      <button
  className={`favorite-btn ${isFavorite ? "remove" : "add"}`}
  onClick={() => toggleFavorite(meal.idMeal)}
>
  {isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
</button>
    </div>
  );
}

export default MealCard;
