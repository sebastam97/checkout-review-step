import * as yup from 'yup';

export const reviewStepValidationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede tener más de 100 caracteres')
    .matches(
      /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s]+$/,
      'El nombre solo puede contener letras y espacios'
    )
    .required('El nombre completo es obligatorio'),

  country: yup
    .string()
    .min(1, 'Debes seleccionar un país')
    .required('El país es obligatorio'),

  address: yup
    .string()
    .min(5, 'La dirección debe tener al menos 5 caracteres')
    .max(200, 'La dirección no puede tener más de 200 caracteres')
    .required('La dirección es obligatoria')
});
