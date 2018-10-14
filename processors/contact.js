import database from '../database/models';

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
class contactProcessor {
  /**
   * @description - Creates a new contact for a user
   * @param{Object} contact - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async createContact(contact) {
    return new Promise((resolve, reject) => {
      database.Contact
        .create(contact)
        .then((createdContact) => {
          const resp = {
            message: 'Contact created successfully',
            contact: createdContact
          };
          resolve(resp);
        })
        .catch(database.Sequelize.ValidationError, (error) => {
          reject(error.errors);
        })
        .catch(error => reject(error));
    });
  }
}

export default contactProcessor;
