import { ValidationError } from 'yup'
import { showMessage } from "react-native-flash-message";
import { upperFirst } from 'lodash'



interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    showMessage({
      type: 'danger',
      message: error.message,
      position: 'top',
      icon: 'danger',
      duration: 5000
    });
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
