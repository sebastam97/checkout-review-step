import type { FieldProps } from 'formik';
import { Field } from 'formik';
import React from 'react';
import { StyledTextField } from './styles/InputField.styles';

interface InputFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  multiline?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
  fullWidth = true,
  variant = 'outlined',
  size = 'medium',
  multiline = false,
  rows,
  onChange
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <StyledTextField
          {...field}
          id={name}
          label={label}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          fullWidth={fullWidth}
          variant={variant}
          size={size}
          multiline={multiline}
          rows={rows}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          onChange={(e) => {
            field.onChange(e);
            if (onChange) {
              onChange(e.target.value);
            }
          }}
        />
      )}
    </Field>
  );
};
