import { Alert, Box } from '@mui/material';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface CaptchaWidgetProps {
  onVerify: (token: string | null) => void;
  siteKey: string;
  type?: 'normal' | 'compact' | 'invisible';
}

export const CaptchaWidget: React.FC<CaptchaWidgetProps> = ({
  onVerify,
  siteKey,
  type = 'normal'
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (token: string | null) => {
    setError(null);
    onVerify(token);
  };

  const handleError = () => {
    setError('Error al cargar el captcha. Por favor, intenta nuevamente.');
    onVerify(null);
  };

  const handleExpired = () => {
    setError('El captcha ha expirado. Por favor, verifica nuevamente.');
    onVerify(null);
  };

  if (error) {
    return (
      <Box sx={{ py: 2 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleChange}
        onError={handleError}
        onExpired={handleExpired}
        size={type}
      />
    </Box>
  );
};
