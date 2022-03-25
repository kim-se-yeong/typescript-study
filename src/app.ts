import express, {Request, Response} from 'express';
import userRouter from './routes/user';

class Server {
    public app: express.Application

    constructor() {
        this.app = express();
    }
}

const app = new Server().app

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: false}));

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.render('main');
})

app.set('port', 3000)
    .listen(app.get('port'), () => {
        console.log(`${app.get('port')} server is Running`)
    })
    .on('error', err => {
        console.log(`Error message ${err}`)
    })