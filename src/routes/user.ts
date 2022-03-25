import express, {Request, Response} from 'express';
import { get } from '../interface/user';

const router = express.Router();

router.get('/create', (req: Request, res: Response) => {
    res.render('signup');
})

router.post('/create', (req: Request, res: Response) => {
    //do somthing
})

router.get('/list', (req: Request, res: Response) => {
    
    let user = {
        id: 'seyeong',
        password: 'aa'
    };
    let response = get(user);
    res.send(user.id + ', ' + user.password);
})

export default router;