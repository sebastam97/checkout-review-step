import { useTranslation } from 'react-i18next';
import { InputField } from '../../../../shared/components/InputField/InputField';
import SelectField from '../../../../shared/components/SelectField/SelectField';
import { useCountriesQuery } from '../../query/query';
import {
  FieldsContainer,
  FormCard,
  FormContainer,
  FormSection
} from './styles/FormValidation.styles';

function FormValidation() {
  const { t } = useTranslation();
  const { data: countries = [], isLoading: isLoadingCountries } =
    useCountriesQuery();

  return (
    <FormContainer>
      {/* Sección de Información Personal */}
      <FormCard elevation={0}>
        <FormSection>
          <FieldsContainer>
            <InputField
              name="fullName"
              label={t('reviewStep.form.fullName')}
              placeholder={t('reviewStep.form.fullNamePlaceholder')}
              required
            />
            <SelectField
              name="country"
              label={t('reviewStep.form.country')}
              options={countries}
              loading={isLoadingCountries}
              placeholder={t('reviewStep.form.countryPlaceholder')}
              noOptionsText={t('reviewStep.form.noCountriesFound')}
              required
            />
            <InputField
              name="address"
              label={t('reviewStep.form.address')}
              placeholder={t('reviewStep.form.addressPlaceholder')}
              required
            />
          </FieldsContainer>
        </FormSection>
      </FormCard>
    </FormContainer>
  );
}

export default FormValidation;
