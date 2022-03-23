import express from 'express';

class Server {
    public app: express.Application

    constructor() {
        this.app = express();
    }
}

const app = new Server().app

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello, Typescript!');
})

app.set('port', 3000)
    .listen(app.get('port'), () => {
        console.log(`${app.get('port')} server is Running`)
    })
    .on('error', err => {
        console.log(`Error message ${err}`)
    })