import { Autocomplete, TextField } from '@mui/material';
import { Field, type FieldProps } from 'formik';
import { StyledFormControl } from './styles/SelectField.styles';

interface SelectFieldOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  name: string;
  label?: string;
  options: SelectFieldOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  freeSolo?: boolean;
  multiple?: boolean;
  noOptionsText?: string;
  onInputChange?: (event: React.SyntheticEvent, value: string) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options,
  placeholder = 'Seleccionar...',
  required = false,
  disabled = false,
  loading = false,
  fullWidth = true,
  variant = 'outlined',
  size = 'medium',
  freeSolo = false,
  multiple = false,
  noOptionsText = 'Sin opciones',
  onInputChange
}) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const handleChange = (
          _event: React.SyntheticEvent,
          value: SelectFieldOption | SelectFieldOption[] | string | null
        ) => {
          if (multiple) {
            // Para múltiples selecciones
            const values =
              (value as SelectFieldOption[])?.map((item) => item.value) || [];
            form.setFieldValue(name, values);
          } else if (freeSolo && typeof value === 'string') {
            // Para texto libre
            form.setFieldValue(name, value);
          } else {
            // Para selección única
            const selectedValue = (value as SelectFieldOption)?.value || '';
            form.setFieldValue(name, selectedValue);
          }
        };

        const getValue = () => {
          if (multiple) {
            // Para múltiples selecciones
            const fieldValues = field.value || [];
            return options.filter((option) =>
              fieldValues.includes(option.value)
            );
          } else if (freeSolo) {
            // Para texto libre, permitir tanto objetos como strings
            const option = options.find((opt) => opt.value === field.value);
            return option || field.value || null;
          } else {
            // Para selección única
            return (
              options.find((option) => option.value === field.value) || null
            );
          }
        };

        return (
          <StyledFormControl
            fullWidth={fullWidth}
            error={meta.touched && Boolean(meta.error)}
          >
            <Autocomplete
              options={options}
              getOptionLabel={(option) => {
                if (typeof option === 'string') return option;
                return option.label || '';
              }}
              isOptionEqualToValue={(option, value) => {
                if (typeof value === 'string') return option.value === value;
                return option.value === value.value;
              }}
              value={getValue()}
              onChange={handleChange}
              onInputChange={onInputChange}
              disabled={disabled}
              loading={loading}
              multiple={multiple}
              freeSolo={freeSolo}
              noOptionsText={noOptionsText}
              size={size}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label ? `${label}${required ? ' *' : ''}` : undefined}
                  placeholder={placeholder}
                  variant={variant}
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error ? meta.error : ''}
                />
              )}
            />
          </StyledFormControl>
        );
      }}
    </Field>
  );
};

export default SelectField;
