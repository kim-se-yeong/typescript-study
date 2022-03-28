import express, {Request, Response} from 'express';
import passport from 'passport';
import passportgithub from 'passport-github2';
import session from 'express-session';
import dotenv from 'dotenv';
import envpath from './util/filepath';
import userRouter from './routes/user';

dotenv.config({ path: envpath});
const GitHubStrategy = passportgithub.Strategy;

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
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, }))
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj: any, done) => {
    done(null, obj);
});

passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: process.env.GITHUB_CALLBACK_URL!
    }, (accessToken: string, refreshToken: string, profile: any, done: any) => {
        process.nextTick(() => {
            return done(null, profile);
        })
    }
));

app.get('/', (req: Request, res: Response) => {
    res.render('main', { user: req.user });
});

app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
        res.redirect('/');   
})

app.get('/auth/logout', (req: Request, res: Response) => {
    req.logOut();
    res.redirect('/');
})

app.set('port', 3000)
    .listen(app.get('port'), () => {
        console.log(`${app.get('port')} server is Running`)
    })
    .on('error', err => {
        console.log(`Error message ${err}`)
    })