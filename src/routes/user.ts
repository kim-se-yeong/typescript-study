import express, {Request, Response} from 'express';
import { User, get } from '../interface/user';
import { pool } from '../db/config'

const router = express.Router();

router.get('/create', (req: Request, res: Response) => {
    res.render('signup');
})

router.post('/create', async (req: Request, res: Response) => {
    
    const reqBody = req.body as User;

    let connection = await pool.getConnection();
    let query = `INSERT INTO DRK.user(id, password) VALUES('${reqBody.id}', '${reqBody.password}');`;

    try {
        await connection.query(query);
        res.redirect('/');
    } catch (error) {
        console.error(error);
    }
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