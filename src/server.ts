import express from "express";

const app = express();

app.get("/users",(request, response)=>{
  console.log("Lista usuários");
  response.json([
    'Leandro',
    'Vicente',
    'Silva'
  ])
})

app.listen(3333)