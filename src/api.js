import axios from 'axios';

const NUTRITION_APP_ID = 'fba6f887';  // EDAMAM App ID
const NUTRITION_APP_KEY = '38f877e01bafce540143f99812553c1e';  // EDAMAM App Key

const RECIPE_APP_ID = '6352f86b';  // Recipe App ID
const RECIPE_APP_KEY = 'af7b96d5bc11b750d47469df3488071a';  // Recipe App Key



// Function to analyze food
export const analyzeFood = async (foodText, weight) => {
    const apiUrl = `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITION_APP_ID}&app_key=${NUTRITION_APP_KEY}&nutrition-type=logging&ingr=${encodeURIComponent(`${weight}g ${foodText}`)}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data; // Return the data with nutritional info
  } catch (error) {
    console.error('Error fetching data from EDAMAM API', error);
    return null;
  }
}

// Recipe Search API function
export const searchRecipe = async (query) => {
    const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${RECIPE_APP_ID}&app_key=${RECIPE_APP_KEY}`;
  
    try {
      const response = await axios.get(apiUrl);
      return response.data.hits; // Palauttaa reseptit
    } catch (error) {
      console.error('Error fetching recepies from EDAMAM API', error);
      return [];
    }
  };
