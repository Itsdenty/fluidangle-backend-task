
import Transformer from '../../utils/transformer';

const Validator = {};

Validator.create = (req, res, next) => {
  req.checkBody('user.firstName', 'Please enter a valid firstName').notEmpty().isHumanName();
  req.checkBody('user.lastName', 'Please supply a valid lastName').notEmpty().isHumane();
  req.checkBody('user.email', 'please supply a valid email').notEmpty().isEmailV2();
  req.checkBody('user.password', 'Please supply a valid password').isGTE(6).isLTE(50);
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(0,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

export default Validator;
