import database from '../database/models';
import createToken from '../utils/createToken';

const secretKey = process.env.JWT_SECRET;

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
class userProcessor {
  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} user - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async createUser(user) {
    return new Promise((resolve, reject) => {
      database.User
        .create(user)
        .then((createdUser) => {
          const {
            id, firstName, lastName, email
          } = createdUser;
          // create the token after all the inputs are certified ok
          const authToken = createToken.token({
            id, firstName, lastName, email
          }, secretKey);
          const resp = {
            message: 'User created successfully',
            user: {
              _id, firstName, lastName, email
            },
            token: authToken,
          };
          resolve(resp);
        })
        .catch(database.Sequelize.ValidationError, (error) => {
          reject(error.errors);
        })
        .catch(error => reject(error));
    });
  }


  /**
   * @description - Signs a user in by creating a session token
   * @param{Object} login - api request
   * @param{Object} res - route response
   * @return{json} the user's login status
   */
  static async loginUser(login) {
    return new Promise((resolve, reject) => {
      database.User.findOne({ where: { email: login.email } }).then((user) => {
        if (!user) {
          reject(new Error('unable to get user details'));
        } else if (!user.validPassword(login.password)) {
          reject(new Error('invalid password supplied'));
        } else {
          const authUser = user,
            {
              _id, firstName, lastName, email
            } = authUser;

          const authToken = createToken.token({
            _id, firstName, lastName, email
          }, secretKey);
          const resp = {
            message: 'User loggedin successfully',
            user: {
              _id, firstName, lastName, email
            },
            token: authToken,
          };
          resolve(resp);
        }
      });
    });
  }
  //   const email = req.body.email.trim().toLowerCase();
  //   const findOneUser = `SELECT * FROM aUsers
  //                         WHERE email = $1`;
  //   // checks if a token was passed into the request header
  //   if (req.headers.authorization) {
  //     try {
  //       const token = req.headers.authorization.split(' ')[1];
  //       const decoded = jwt.verify(token, secretKey);
  //       req.userData = decoded.userid;
  //       if (req.userData !== null) {
  //         return {message: 'You are already logged in'};
  //       }
  //     }
  //     catch (error) {
  //       return {message: 'Token is invalid or has expired, Please re-login'};
  //     }
  //   }
  //   try {
  //     const client = await clientPool.connect();
  //     //find a user with the given email
  //     const user = await client.query({text : findOneUser, values: [email]});
  //     if (user.rows[0]) {
  //       const signedInUser = user.rows[0];
  //       //check it the password matches
  //       const correctPassword = await bcrypt.compare(req.body.password, user.rows[0].password);
  //       if( !correctPassword) {
  //         return { message: 'wrong password!'};
  //       }
  //       else {
  //         // creates a token that lasts for 24 hours
  //         const {
  //           userid, firstname, lastname
  //         } = user.rows[0];
  //         const authToken = createToken.token({ userid, firstname, lastname }, secretKey);
  //         return {
  //           message: 'You are logged in!',
  //           token: authToken,
  //           user: signedInUser
  //         };
  //       }
  //     }
  //   }
  //   catch(error){
  //     return{ message: 'An error occured'};
  //   }
}

export default userProcessor;
