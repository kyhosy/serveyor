import User from '../models/user';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function login(req, res) {

    User.authenticate(req.body.username,req.body.password, function (error, user) {
        if (error || !user) {
            return res.status(401).json({ message: "Invalid username/password" });
        }
        else
        {
            jwtKey = 'Palomino1!';
            var token = jwt.sign(user, jwtKey, { expiresIn: '1d' });
            return res.json({ message: "Logged in", token: 'Bearer ' + token });
        }
    });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function register(req, res) {
  
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function forgotPassword(req, res) {
}

