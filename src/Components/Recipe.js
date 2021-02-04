import React from 'react';
import style from './recipe.module.css';

const recipe = ({title, calories, image, diet, ingredients}) =>{
  return(
    <div className={style.recipe} >
    <ol>
      {ingredients.map(ingredient =>(
        <li>{ingredient.text}</li>
      ))};
    </ol>
      <h1>{title}</h1>
      <p>{calories}</p>
      <p>{diet}</p>
      <img  className={style.image} src={image} alt="Aiyyo" />
    </div>
  );
}

export default recipe;