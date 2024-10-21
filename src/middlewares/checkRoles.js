/*Це для мене на майбутнє)) не звертайте уваги))*/

import createHttpError from 'http-errors';

import { ContactsCollection } from '../db/models/contacts.js';
import { ROLES } from '../constants/index.js';

export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const { user } = req;

    if (!user) {
      next(createHttpError(401));
      return;
    }

    const { role } = user;
    if (roles.includes(ROLES.CONTACTS_ADMIN) && role === ROLES.CONTACTS_ADMIN) {
      next();
      return;
    }

    if (roles.includes(ROLES.CONTACTS_USER) && role === ROLES.CONTACTS_USER) {
      const { contactId } = req.params;

      const query = { userId: user._id };

      if (contactId) {
        query._id = contactId;
      }

      const contacts = await ContactsCollection.findOne(query);

      if (contacts) {
        next();
        return;
      }
    }

    next(createHttpError(403));
  };
