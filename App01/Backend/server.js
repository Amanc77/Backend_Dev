import express  from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('server is ready');
});

const port =  process.env.Port || 3000;


app.get('/jokes',(req,res) =>{
    const jokes = [
        {
            id : 1,
            title : 'A joke',
            content : 'THis is a joke'

        },
        {
            id : 2,
            title : 'A joke',
            content : 'THis is a joke'

        },
        {
            id : 3,
            title : 'A joke',
            content : 'THis is a joke'

        },
        {
            id : 4,
            title : 'A joke',
            content : 'THis is a joke'

        },
        {
            id : 5,
            title : 'A joke',
            content : 'THis is a joke'

        },
        {
            id : 6,
            title : 'A joke',
            content : 'THis is a joke'

        }
    ];
    res.send(jokes);
});



app.listen(port, () => {
    console.log (`serve at http://localhost:${port}`);
});