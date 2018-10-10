import bcrypt from 'bcrypt';
import transformer from '../utils/transformer';
// import processor from '../processors/user';
const processor = {};
processor.createUser = req => req.body.email;

/**
 *
 *
 * @class userController
 */
class userController {

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof userController
   * @returns {*} createUser
   */
  static async userCreate(req, res) {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const email = req.body.email.trim().toLowerCase();
    req.body.email = email;
    req.body.password = hashPassword;
    try {
      const createUser = await processor.createUser(req);
      res.send(transformer.transformResponse(1, 'ok', createUser));
    } catch (error) {
      res.send(transformer.transformResponse(1, 'ok', error));
    }
  }

  // static async userLogin  (req, res) {
  //   try{
  //     const loginUser = await processor.loginUser(req);
  //     res.send(transformer.transformResponse(1, 'ok', loginUser));
  //   }
  //   catch(error) {
  //     res.send(transformer.transformResponse(1, 'ok', error))
  //   }
  // };

  // static userLogout (req, res) {
  //   res.send(transformer.transformResponse(1, 'ok', 'user logged out'));
  // };
}
export default userController;
