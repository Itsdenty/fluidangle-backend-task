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
  static async contactCreate(req, res) {
    const { contact } = req.body;
    contact.userId = req.decodedToken.id;
    try {
      const createContact = await processor.createContact(contact);
      res.send(transformer.transformResponse(1, 'ok', createContact));
    } catch (error) {
      res.send(transformer.transformResponse(0, 'ok', error));
    }
  }
}
export default contactController;
