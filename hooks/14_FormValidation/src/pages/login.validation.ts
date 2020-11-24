import { ValidationSchema, Validators } from "@lemoncode/fonk";
import { createFormikValidation } from "@lemoncode/fonk-formik";

const validationSchema: ValidationSchema = {
  field: {
    login: [
        Validators.required,
      {
        validator: Validators.minLength,
        customArgs: { length: 4 }
      }
    ],
    password: [Validators.required],
  },
};

export const loginFormValidation = createFormikValidation(validationSchema);
