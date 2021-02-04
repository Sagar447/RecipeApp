import './App.css';
import React, { useEffect, useState } from "react";
import Recipe from './Components/Recipe'


const App=()=> {
  const APP_ID = "1b19a35f";
  const APP_KEY= "500866b72c06d5c19744d139dca52c89";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Banana");

  useEffect(()=>{
    getRecipes()
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // setRecipes(data.hits);
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch = (event) =>{
    setSearch(event.target.value);
  }

  const getSearch = (event)=>{
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
     <form className="search-form" onSubmit={getSearch}>
      <input 
        className="search-bar" 
        type="text"
        value= {search}
        onChange={updateSearch} />
      <button className="search-button" type = "submit">
        Search
      </button>
     </form>
     <div className="recipes">
     {recipes.map(prop =>(
      <Recipe 
         key ={prop.recipe.label}
         title = {prop.recipe.label}
         calories = {prop.recipe.calories}
         image = {prop.recipe.image} 
         diet = {prop.recipe.dietLabels}
         ingredients = {prop.recipe.ingredients}/>
    ))}
     </div>
    </div>
  );
};

export default App;
