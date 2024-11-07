import React, { useState } from 'react';
import { searchRecipe } from '../api';
import '../App.css'; 

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        
        setErrorMessage('');
        setRecipes([]);

        const results = await searchRecipe(query);

        if (results.length === 0) {
            setErrorMessage("Recipes cannot be found with the searched word. Please try again.");
        } else {
            setRecipes(results);
        }
    };

    return (
            <div className="text-center">
                <div className="hero">
                    <h2 className="hero-title">Recipe Search</h2>
                </div>
            <h4>You can search for recipes by writing an ingredient in the search bar,<br/> and then see the calories per portion of each recipe.</h4>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for recipes"
                    className='form-input'
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {recipes.length > 0 && (
                <div>
                    <h3>Results:</h3>
                    <div className="card-container">
                        {recipes.map((recipe, index) => {
                            const caloriesPerServing = recipe.recipe.calories / recipe.recipe.yield;
                            return (
                                <div className="card" key={index}>
                                    <h4>{recipe.recipe.label}</h4>
                                    <p>Calories per serving: {caloriesPerServing.toFixed(2)} kcal</p>
                                    <img 
                                        src={recipe.recipe.image} 
                                        alt={recipe.recipe.label} 
                                        className="recipe-image" 
                                    />
                                    <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                                        View Recipe
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeSearch;
