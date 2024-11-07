import React, { useState } from 'react';
import { analyzeFood } from '../api';
import '../App.css';

const FoodLog = () => {
    const [foodInput, setFoodInput] = useState('');
    const [weight, setWeight] = useState('');
    const [nutritionData, setNutritionData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState({ foodInput: '', weight: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await analyzeFood(foodInput, weight);

            if (!data || !data.calories) {
                setErrorMessage("We cannot calculate the nutrition of this ingredient. Please check the spelling of the ingredient.");
                return;
            }

            setErrorMessage('');

            if (editIndex !== null) {
                const updatedData = nutritionData.map((item, index) =>
                    index === editIndex
                        ? { foodInput, weight, data }
                        : item
                );
                setNutritionData(updatedData);
                setEditIndex(null);
                setEditValue({ foodInput: '', weight: '' });
            } else {
                setNutritionData(prevData => [
                    ...prevData,
                    { foodInput, weight, data }
                ]);
            }

            setFoodInput('');
            setWeight('');
        } catch (error) {
            setErrorMessage("Search failed. Check the connection or try again.");
        }
    };

    const handleDelete = (index) => {
        const updatedData = nutritionData.filter((_, i) => i !== index);
        setNutritionData(updatedData);
    };

    const startEditing = (index) => {
        setEditIndex(index);
        const item = nutritionData[index];
        setEditValue({ foodInput: item.foodInput, weight: item.weight });
        setFoodInput(item.foodInput);
        setWeight(item.weight);
    };

    return (
        <div className="text-center">
            <div className="hero">
                <h2 className="hero-title">Food Log Page</h2>
            </div>
            <h4>Enter the name of the ingredient in the first field<br/> and the weight in grams in the next field.<br/>
                Analyze to see the nutritional information and calories it contains.<br/>
                You can easily retrieve nutritional information one ingredient at a time.</h4>
            <form onSubmit={handleSubmit}>
                <input
                    className='form-input'
                    type="text"
                    value={foodInput}
                    onChange={(e) => setFoodInput(e.target.value)}
                    placeholder="Enter food item"
                />
                <input
                    className='form-input'
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight in grams"
                />
                <button type="submit" className="btn btn-primary">
                    {editIndex !== null ? "Save Changes" : "Analyze"}
                </button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="card-container">
                {nutritionData.map((item, index) => (
                    <div className="card" key={index}>
                        <h3>{item.foodInput} - {item.weight} g</h3>
                        <div className="nutrition-info">
                            <p>Calories: {item.data.calories} kcal</p>
                            <p>Fat: {item.data.totalNutrients.FAT ? item.data.totalNutrients.FAT.quantity : 0} g</p>
                            <p>Carbs: {item.data.totalNutrients.CHOCDF ? item.data.totalNutrients.CHOCDF.quantity : 0} g</p>
                            <p>Protein: {item.data.totalNutrients.PROCNT ? item.data.totalNutrients.PROCNT.quantity : 0} g</p>
                        </div>
                        <button onClick={() => startEditing(index)} className="btn btn-outline-primary btn-sm">Edit</button>
                        <button onClick={() => handleDelete(index)} className="btn btn-outline-danger btn-sm">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodLog;
