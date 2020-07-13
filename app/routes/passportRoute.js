const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy

const session = require('express-session')


module.exports = function(app) {
    var router = require("express").Router();
    app.use(passport.initialize())
    app.use(
        session({
            secret: 'boyumi_secret_key',
            cookie: {
                maxAge: 60 * 60 * 1000,
            },
            resave: true,
            saveUninitialized: false,
        })
    )

    app.use(passport.session())
    
    passport.use(
        'login-kakao',
        new KakaoStrategy({
            clientID: 'ac4afcc651e8719f3f05d09383c99555',
            callbackURL: 'http://localhost:8080/oauth'
        },
        function(accessToken, refreshToken, profile, done){
            try{
                console.log(profile);
                return done(null, profile);
            }catch(err){
                return done(err);
            }
        })
    )

    passport.serializeUser(function(user, done){
        done(null, user);
    })

    passport.deserializeUser(function(user,done){
        done(null, user);
    })

    app.get('/kakao', passport.authenticate('login-kakao'))
    app.get(
    '/oauth',
    passport.authenticate('login-kakao', {
        successRedirect: '/social/success', // 성공하면 /main으로 가도록
        failureRedirect: '/social/fail',
    }))

   
    app.get('/kakao/logout', function(req,res){
        req.logout();
       res.redirect('/');
        
    })
  app.get('/social/success', function (req, res) {
    return res.json({
      isSuccess: true,
      code: 200,
      message: '소셜로그인 성공',
    })
  })

  app.get('/social/fail', (req, res) => {
    console.log(req._passport.session)
    return res.json({
      status: 400,
    })
  })
   

  
    app.use('/', router);
  };
  