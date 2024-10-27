import Joi from 'joi';
// import { ROLES } from '../constants/index.js';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  // role: Joi.string()
  //   .valid(ROLES.CONTACTS_USER, ROLES.CONTACTS_ADMIN)
  //   .default(ROLES.CONTACTS_USER),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
