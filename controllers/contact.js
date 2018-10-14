import transformer from '../utils/transformer';
import processor from '../processors/contact';

/**
 *
 *
 * @class contactController
 */
class contactController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof contactController
   * @returns {*} createContact
   */
  static async createContact(req, res) {
    const { contact } = req.body;
    contact.userId = req.decodedToken.id;
    try {
      const createContact = await processor.createContact(contact);
      res.send(transformer.transformResponse(1, 'ok', createContact));
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
   * @memberof contactController
   * @returns {*} userContacts
   */
  static async getContacts(req, res) {
    const userId = req.decodedToken.id;
    try {
      const userContacts = await processor.getContacts(userId);
      res.send(transformer.transformResponse(1, 'ok', userContacts));
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
   * @memberof contactController
   * @returns {*} userContacts
   */
  static async getContact(req, res) {
    const userId = req.decodedToken.id;
    const { id } = req.params;
    try {
      const userContacts = await processor.getContact(userId, id);
      res.send(transformer.transformResponse(1, 'ok', userContacts));
    } catch (error) {
      res.send(transformer.transformResponse(0, 'ok', error));
    }
  }
}


export default contactController;
