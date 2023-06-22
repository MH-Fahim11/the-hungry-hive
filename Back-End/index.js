const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Server is running")
});

app.get('/chefs', (req,res)=>{
    res.send(chefs)
})
app.get('/chefs/:id', (req,res)=>{
    const id = req.params.id;
    const chef= chefs.find(n => n.chefs_id == id);
    res.send(chef)
})
app.get('/recipes', (req,res)=>{
    res.send(recipes)
})
app.get('/recipes/:id', (req,res)=>{
    const id = req.params.id;
    const selectedRecipes= recipes.find(n => n.recipes_id == id);
    res.send(selectedRecipes)
})
app.get('/chefrecipes/:id',(req,res)=>{
    const id = req.params.id;
    const chefRecipes = recipes.filter(n => n.chefs_id == id);
    res.send(chefRecipes);
})
app.listen(port,()=>{
    console.log(`server api running on port:${port}`);
})