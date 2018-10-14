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

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof contactController
   * @returns {*} userContacts
   */
  static async updateContact(req, res) {
    const userId = req.decodedToken.id;
    const { id } = req.params;
    try {
      const userContacts = await processor.updateContact(userId, id, req.body.contact);
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
   * @returns {*} deletedContact
   */
  static async deleteContact(req, res) {
    const userId = req.decodedToken.id;
    const { id } = req.params;
    try {
      const deletedContact = await processor.deleteContact(userId, id);
      res.send(transformer.transformResponse(1, 'ok', deletedContact));
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
   * @returns {*} starredContacts
   */
  static async starContact(req, res) {
    const userId = req.decodedToken.id;
    const { id } = req.params;
    const update = { isStarred: true };
    try {
      const starredContact = await processor.starContact(userId, id, update);
      res.send(transformer.transformResponse(1, 'ok', starredContact));
    } catch (error) {
      res.send(transformer.transformResponse(0, 'ok', error));
    }
  }
}


export default contactController;
