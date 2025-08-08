import { ArrowBack, CheckCircle } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import type { UserData } from '../../models/local/reviewStep.local-model';
import useActionBar from './hooks/useActionBar';
import {
  StyledActionBar,
  StyledBackButton,
  StyledConfirmButton
} from './styles/ActionBar.styles';

interface ActionBarProps {
  computed: boolean;
  canSubmit: boolean;
  isProcessing: boolean;
  captchaVerified: boolean;
}

export const ActionBar = ({
  computed,
  canSubmit,
  isProcessing,
  captchaVerified
}: ActionBarProps) => {
  const { t } = useTranslation();
  const { submitForm } = useFormikContext<UserData>();
  const { onGoBack } = useActionBar();

  return (
    <StyledActionBar>
      <StyledBackButton
        variant="contained"
        size="large"
        onClick={onGoBack}
        disabled={computed}
        startIcon={<ArrowBack />}
      >
        {t('reviewStep.buttons.goBack')}
      </StyledBackButton>

      <StyledConfirmButton
        variant="contained"
        size="large"
        onClick={submitForm}
        disabled={!canSubmit || isProcessing || !captchaVerified}
        startIcon={
          isProcessing ? <CircularProgress size={20} /> : <CheckCircle />
        }
      >
        {isProcessing
          ? t('reviewStep.buttons.processing')
          : t('reviewStep.buttons.confirm')}
      </StyledConfirmButton>
    </StyledActionBar>
  );
};
