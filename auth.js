const passport = require('passport');
const LocalStrategy = require('passport-local');
const Person = require('./model/Person');

passport.use(new LocalStrategy(async(username, password, done)=>{
    //authentication logic 
    try{
        // console.log('Received creadentials:', username, password);
        const user = await Person.findOne({username});
        if(!user) 
            return done(null, false, {message : 'Incorrect username'}); 

        const isPasswordMatch = await user.comparePassword(password);

        if(isPasswordMatch) {
            return done(null, user);
        }else {
            return done(null, false, {message : 'Incorrect passoword'});
        }
    }catch(err) {
        return done(err);
    }
}));




module.exports = passport;