import { CONTACT_TYPE } from '../constants/index.js';

const parseContactType = (type) => {
  const isString = typeof type === 'string';

  if (!isString) return;
  const isContactType = (type) => CONTACT_TYPE.includes(type);

  if (isContactType(type)) return type;
};

const parseisFavourite = (boolean) => {
  const isString = typeof boolean === 'string';
  if (!isString) return;

  const parsedBoolean = boolean === 'true';

  if (typeof parsedBoolean !== 'boolean') return;

  return parsedBoolean;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedisFavourite = parseisFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedisFavourite,
  };
};
