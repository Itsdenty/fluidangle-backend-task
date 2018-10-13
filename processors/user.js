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
              id, firstName, lastName, email
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
              id, firstName, lastName, email
            } = authUser;

          const authToken = createToken.token({
            id, firstName, lastName, email
          }, secretKey);
          const resp = {
            message: 'User loggedin successfully',
            user: {
              id, firstName, lastName, email
            },
            token: authToken,
          };
          resolve(resp);
        }
      });
    });
  }
}

export default userProcessor;
