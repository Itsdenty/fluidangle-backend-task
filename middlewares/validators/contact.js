import Transformer from '../../utils/transformer';

const Validator = {};

Validator.create = (req, res, next) => {
  req.checkBody('contact.firstName', 'Please enter a valid firstName').notEmpty().isHumanName();
  req.checkBody('contact.lastName', 'Please supply a valid lastName').notEmpty().isHumanName();
  req.checkBody('contact.email', 'please supply a valid email').notEmpty().isEmailV2();
  req.checkBody('contact.phoneNumber', 'Please supply a valid phone number').notEmpty().isMinLen(11).isMaxLen(13);
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(0,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

export default Validator;
