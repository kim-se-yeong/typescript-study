import express from 'express';
import session from 'express-session';
import passport from 'passport';

const app = express();
app.use(passport.initialize());
app.use(passport.session());

//session 활성화
app.use(session({
    name: "mysession", // 쿠키에 저장될 세션 키 이름
    secret: 'keyboard cat', //required, 세션 암호화를 위한 시크릿
    resave: false, //session 데이터가 변경되기 전까지 저장소에 저장하지 않는다.
    saveUninitialized: true //session 이 필요하기 전까지는 세션을 구동시키지 않는다.
}))

app.get('/', (req, res) => {
    res.json({
        "req.session": req.session,
        "req.user": req.user
    })
})

app.listen(3000, () => console.log('session app listening!'));