import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    /*Чому по конспекту тут помилка прокидується у некст, а ні через throw?*/
    next(
      createHttpError(400, 'Bad Request', {
        errors: err.details,
      }),
    );
  }
};
