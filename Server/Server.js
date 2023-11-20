const axios = require('axios');
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 5050;
const cors = require('cors');

const recipesFilePath = path.resolve(__dirname, 'recipes.json');

app.use(cors());

app.get('/camping_cookout/Server/recipes.json', async (req, res) => {
  try {
    const data = await fs.readFile(recipesFilePath, 'utf8');
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

  fetchData();
});

const fetchData = async () => {
  try {
    const serverURL = 'http://localhost:';
    const port = 5050;
    const endpoint = '/camping_cookout/Server/recipes.json';
    const fullURL = `${serverURL}${port}${endpoint}`;

    const response = await axios.get(fullURL);

    const { id, title, ingredients, instructions } = response.data;
  
  } catch (error) {
    console.error('Error', error.message);
  }
};
