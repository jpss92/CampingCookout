// const fs = require('fs');
// const pdf = require('pdf-parse');

// const pdfBuffer = fs.readFileSync('./PDFs/500+ camping recipes.pdf');

// pdf(pdfBuffer)
//   .then((data) => {
//     const pdfContent = data.text;

//     const recipes = [];
//     let currentRecipe = null;
//     let isIngredients = true;

//     const lines = pdfContent.split('\n');
//     for (const line of lines) {
//       if (line.match(/^\d+\.\s/)) {
//         if (currentRecipe) {
//           recipes.push(currentRecipe);
//         }
//         currentRecipe = {
//           id: parseInt(line.match(/^\d+/)[0]),
//           title: line.replace(/^\d+\.\s+/, ''),
//           ingredients: [],
//           instructions: [],
//         };
//         isIngredients = true; // Reset the flag when a new recipe starts
//       } else {
//         if (currentRecipe) {
//           if (line.trim() === '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~') {
//             isIngredients = false; // Switch to processing instructions
//           } else if (line.trim() !== '') {
//             if (!line.trim().match(/^\d+$/)) { // Exclude lines containing only numbers
//               if (isIngredients) {
//                 currentRecipe.ingredients.push(line);
//               } else {
//                 currentRecipe.instructions.push(line);
//               }
//             }
//           }
//         }
//       }
//     }

//     if (currentRecipe) {
//       recipes.push(currentRecipe);
//     }

//     const jsonRecipes = JSON.stringify(recipes, null, 2);

//     fs.writeFile('recipes.json', jsonRecipes, 'utf8', (err) => {
//       if (err) {
//         console.error('Error saving the JSON data to the file:', err);
//       } else {
//         console.log('JSON data has been saved to recipes.json');
//       }
//     });
//   })
//   .catch((error) => {
//     console.error('An error occurred while processing the PDF:', error);
//   });
