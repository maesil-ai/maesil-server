const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy
const session = require('express-session')
const kakaoKey = require('../config/kakaoKey.json')
const UserService = require('../services/userService')
const jwt = require('jsonwebtoken')
const secret_config = require('../config/secret')

module.exports = function(app) {
    var router = require("express").Router();
    // app.use(
    //     session({
    //         secret: kakaoKey.secretKey,
    //         cookie: {
    //             maxAge: 60 * 60 * 1000,
    //         },
    //         resave: true,
    //         saveUninitialized: false,
    //     })
    // )
    // app.use(passport.initialize())
    // app.use(passport.session())
    
    passport.use(
        'login-kakao',
        new KakaoStrategy({
            clientID: kakaoKey.apiKey,
            callbackURL: kakaoKey.callbackUrl
        },
      async function(req,accessToken, refreshToken, profile, cb){
        let account = profile.id
        console.log(profile, "profile")
        try{
            let result = await UserService.isUser(profile.id);
            if(result.length > 0){
                console.log("이미 가입된 유저")
                
                // return done(null, profile);
                profile.user_id = result.user_id
                return cb(null, profile)
            }
            const newUser = await UserService.signUp(profile.id,accessToken,profile.username)
            
            return cb(null,profile)
        }catch(err){
            return cb(err);
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
        successRedirect: '/social/success', 
        failureRedirect: '/social/fail',
    }))

   
    app.get('/kakao/logout', function(req,res){
       req.logout();
       res.redirect('/');  
    })

    app.get('/social/success',function (req, res) {

        console.log(req.session, "session")
        console.log(req.session.passport._json, "_json")
        console.log(req.session.passport.user.id)
        console.log(req.session.passport.user.user_id, "user_id test")
     
      
        // return res.redirect('https://maesil.ai/auth')
        return res.redirect('https://maesil.ai')
    
        // return res.json({
        // isSuccess: true,
        // code: 200,
        // message: '소셜로그인 성공',
        // token: token
        // })
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
  