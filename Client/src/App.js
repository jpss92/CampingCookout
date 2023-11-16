import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Recipes from "./components/Recipes/Recipes.jsx";

function App() {

  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/camping_cookout/Server/recipes.json');
        setRecipeData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Header />
    <Home recipeData={recipeData} />
    {/* <Recipes recipeData={recipeData} /> */}
   
    </>
  );
}

export default App;
