const express=require('express');


const app = express()

const persons=[
    {id:1,name:'Arto Hellas',number:'040-123456'},
    {id:2,name:'Ada Lovelace',number:'39-44-5323523'},
    {id:3,name:'Dan Abramov',number:'12-43-234345'},
    {id:4,name:'Mary Poppendick',number:'39-236423122'}
]

app.get('/',(req,res) => {
    let msg= 'Phonebook has info for 4 people';
    let hora=
    res.send('Hola mundo');
})

app.get('/api/persons',(req,res) => {
    res.json(persons);
})

/* app.post('/api/persons',(req,res) => {
    res.json(persons);
})

app.delete('/api/persons',(req,res) => {
    res.json(persons);
})

app.put('/api/persons',(req,res) => {
    res.json(persons);
}) */

const PORT = 3001;
app.listen(PORT, ()=>{
   console.log('Server is running with express'); 
})