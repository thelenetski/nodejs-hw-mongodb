import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
// import { ROLES } from '../constants/index.js';
// import { checkRoles } from '../middlewares/checkRoles.js';

const contactsRouter = Router();

contactsRouter.use(authenticate);

contactsRouter.get(
  '/',
  // checkRoles(ROLES.CONTACTS_ADMIN, ROLES.CONTACTS_USER),
  ctrlWrapper(getContactsController),
);

contactsRouter.get(
  '/:contactId',
  // checkRoles(ROLES.CONTACTS_ADMIN, ROLES.CONTACTS_USER),
  isValidId,
  ctrlWrapper(getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

contactsRouter.patch(
  '/:contactId',
  // checkRoles(ROLES.CONTACTS_ADMIN, ROLES.CONTACTS_USER),
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  // checkRoles(ROLES.CONTACTS_ADMIN, ROLES.CONTACTS_USER),
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
