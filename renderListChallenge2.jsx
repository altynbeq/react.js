 const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

export default function RecipeList() {
  const listMain = recipes.map( rec => {
    return (
      <div>
        <h2>{ rec.name} </h2>
        <ul>
          { rec.ingredients.map(el => {
          return(<li key={el}>{el}</li>)
          })}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Recipes</h1>
      {listMain}
    </div>
  );
}
