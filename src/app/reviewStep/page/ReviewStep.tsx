import { ActionBar } from '../components/ActionBar/ActionBar';
import { CaptchaWidget } from '../components/CaptchaWidget/CaptchaWidget';
import { PageHeader } from '../components/PageHeader/PageHeader';

import { FormikProvider, useFormik } from 'formik';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useUrlParams } from '../../../shared/hooks/useUrlParams';
import FormValidation from '../components/FormValidation/FormValidation';
import { InitialValuesForm } from '../models/initials/initialsValues';
import type { UserData } from '../models/local/reviewStep.local-model';
import { reviewStepValidationSchema } from '../models/validationSchema/reviewStep.validationSchema';
import {
  StyledContainer,
  StyledFormSection,
  StyledGridContainer,
  StyledMainContent
} from '../styles/ReviewStep.styles';

export const ReviewStep = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { referrer } = useUrlParams();

  const formik = useFormik<UserData>({
    initialValues: InitialValuesForm,
    validationSchema: reviewStepValidationSchema,
    onSubmit: (values) => {
      if (!values.captchaToken) {
        alert(t('reviewStep.validation.completeCaptcha'));
        return;
      }
      navigate(
        `/confirm-order?referrer=${referrer}&token=${values.captchaToken}`
      );
    }
  });

  useEffect(() => {
    if (!referrer) {
      console.log('Parámetro referrer faltante - redirigiendo a inicio:', {
        referrer
      });
      navigate('/', { replace: true });
      return;
    }
  }, [referrer, navigate]);

  const handleCaptchaVerify = (token: string | null) => {
    if (!token) return alert(t('reviewStep.validation.completeCaptcha'));
    formik.setFieldValue('captchaToken', token);
  };

  return (
    <FormikProvider value={formik}>
      <StyledContainer maxWidth="lg">
        <StyledMainContent>
          <PageHeader title={t('reviewStep.title')} />
          <StyledGridContainer>
            <StyledFormSection>
              {/* Formulario */}
              <FormValidation />
              {/* RECAPTCHA */}
              <CaptchaWidget
                siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onVerify={handleCaptchaVerify}
                type="normal"
              />
            </StyledFormSection>
          </StyledGridContainer>

          {/* Botones de acción */}
          <ActionBar
            computed={false}
            canSubmit={formik.isValid && formik.dirty}
            isProcessing={false}
            captchaVerified={!!formik.values.captchaToken}
          />
        </StyledMainContent>
      </StyledContainer>
    </FormikProvider>
  );
};
