import passportJWT from "passport-jwt";
import User from "../models/user.model.js";
import config from "./config.js";
import passport from "passport";

const opts = {};
opts.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.SECRET_KEY;

passport.use(
  new passportJWT.Strategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => console.log(err));
  })
);