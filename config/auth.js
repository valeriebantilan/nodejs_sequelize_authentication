import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { User } from '../src/utils/models';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(
    new JwtStrategy(opts, async(payload, done) => {
        try {
            let result;

            result = await User.findOne({
                where: {
                    id: payload.id
                }
            })

            if (result) {
                return done(null, result);
            } else {
                return done(null, null);
            }

        } catch (error) {
            return (error, null);
        }
    })
);
