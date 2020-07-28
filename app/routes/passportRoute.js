const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy
const session = require('express-session')
const kakaoKey = require('../config/kakaoKey.json')
const UserService = require('../services/userService')


module.exports = function(app) {
    var router = require("express").Router();
    app.use(passport.initialize())
    app.use(
        session({
            secret: kakaoKey.secretKey,
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
            clientID: kakaoKey.apiKey,
            callbackURL: 'http://localhost:8080/oauth'
        },
      async function(req,accessToken, refreshToken, profile, done){
            console.log(profile.email,"email")
            console.log(accessToken, "accessToken")
            console.log(refreshToken, "refreshToken")
            console.log(profile, "profile");
            try{
                let result = await UserService.isUser(profile.id);
                console.log(result, "isUser result")
                if(result.length > 0){
                    console.log("이미 가입된 유저")
                    return done(null, profile)
                }
                const newUser = await UserService.signUp(profile.id,accessToken,profile.username)
                return done(null,profile);
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
      console.log("로그인 실패")
    console.log(req._passport.session)
    return res.json({
      status: 400,
    })
  })
   

  
    app.use('/', router);
  };
  