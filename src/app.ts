import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import passportgithub from 'passport-github2';
import User from './interface/user';
import envpath from './util/filePath';

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

passport.serializeUser((user: User, done) => {
    done(null, user);
});

passport.deserializeUser((obj: any, done) => {
    done(null, obj);
});

passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: process.env.GITHUB_CALLBACK_URL! //github 페이지로 갔다가 돌아오는 주소
    }, async (accessToken: string, refreshToken: string, profile: any, done: any) => {
        const user = {
            id: profile.id,
            address: profile.profileUrl
        }
        
        process.nextTick(() => {
            return done(null, user);
        })
    }
));

app.get('/', (req: Request, res: Response) => {
    res.render('main', { id: req.user?.id,  address: req.user?.address});
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