import transformer from '../utils/transformer';
import processor from '../processors/user';

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
    const { user } = req.body;
    try {
      const createUser = await processor.createUser(user);
      res.send(transformer.transformResponse(1, 'ok', createUser));
    } catch (error) {
      res.send(transformer.transformResponse(0, 'ok', error));
    }
  }

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns {Object} loginUser
   * @memberof userController
   */
  static async login(req, res) {
    try {
      const loginUser = await processor.loginUser(req.body.login);
      res.send(transformer.transformResponse(1, 'ok', loginUser));
    } catch (error) {
      res.send(transformer.transformResponse(0, 'ok', error));
    }
  }

  // static userLogout (req, res) {
  //   res.send(transformer.transformResponse(1, 'ok', 'user logged out'));
  // };
}
export default userController;
