import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Recipes from "./components/Recipes/Recipes.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {getImages, imagePaths } from "./components/Images/Images.js";



function App() {

  const [recipeData, setRecipeData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/camping_cookout/Server/recipes.json');
        setRecipeData(response.data);
        setSearchResults([]);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    
    <Router>
      <Header recipeData={recipeData} setSearchResults={setSearchResults}/>
    <Routes>
      <Route path="/" element={ <> <Home recipeData={searchResults.length > 0 ? searchResults : recipeData}  /> </> } />
      <Route path="/recipes/:id" element={recipeData.length ? <Recipes recipeData={recipeData}  /> : null} />
    </Routes>
    </Router>

  );
}

export default App;
