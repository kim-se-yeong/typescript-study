import express, {Request, Response} from 'express';
import get from './interface/user';

class Server {
    public app: express.Application

    constructor() {
        this.app = express();
    }
}

const app = new Server().app

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Typescript!');
})

app.get('/user/list', (req: Request, res: Response) => {
    let user = get('seyeong', 26);
    res.send(user.age + ', ' + user.name);
})

app.set('port', 3000)
    .listen(app.get('port'), () => {
        console.log(`${app.get('port')} server is Running`)
    })
    .on('error', err => {
        console.log(`Error message ${err}`)
    })