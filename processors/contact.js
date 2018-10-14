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

  /**
   * @description - Signs a user in by creating a session token
   * @param{Object} userId - api request
   * @param{Object} res - route response
   * @return{json} the user's login status
   */
  static async getContacts(userId) {
    return new Promise((resolve, reject) => {
      database.Contact.findAll({ where: { userId } }).then((contacts) => {
        const resp = {
          message: 'User contacts retrieved successfully successfully',
          contacts,
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
   * @param{Object} userId - api request
   * @param{Object} id - route response
   * @return{json} the user's login status
   */
  static async getContact(userId, id) {
    return new Promise((resolve, reject) => {
      database.Contact.findOne({ where: { userId, id } }).then((contact) => {
        const resp = {
          message: 'Single contact retrieved successfully',
          contact,
        };
        resolve(resp);
      })
        .catch(database.Sequelize.ValidationError, (error) => {
          console.log(error);
          reject(error.errors);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}

export default contactProcessor;
