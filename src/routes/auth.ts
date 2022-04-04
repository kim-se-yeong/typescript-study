import express, { Request, Response } from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/github', 
    passport.authenticate('github', { scope: [ 'user:email' ] })
);

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    (req: Request, res: Response) => {
        res.redirect('/');   
})

router.get('/logout', (req: Request, res: Response) => {
    req.logOut();
    res.redirect('/');
})

export default router;