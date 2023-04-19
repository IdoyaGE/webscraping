import express from "express";
import wikipediaController from "./controllers/wikipediaController.js";

const app =express();
/**
 * @route GET/
 * @desc Get wipipedia content
 * 
 */

app.get('/', async (req, res) => {
    const query = req.query.p;
    const {title, links,paragraphs,images}= await wikipediaController.getContent(query);
    res.send(`
    <h1>${title}</h1>
    <p>${paragraphs}</p>
    <img src=${images[1]}>`);
});
    //const data = await wikipediaController.getContent(query);
    //res.send(data); para hacerlo genérico el data
    


app.listen(3999,()=>{
    console.log("Server started on port 3999")
});

