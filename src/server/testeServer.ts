import express from 'express';


const app = express();

app.get('/', (req, res)=>{
    res.send("hello Word")
})


app.get('/usuarios', (req, res)=>{
    res.send(
        'Testanto'
    )
})

app.listen(3000, ()=>{
    console.log("servidor online")
});