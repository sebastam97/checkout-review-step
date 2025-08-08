import { useSearchParams } from 'react-router';

export const useUrlParams = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const referrer = searchParams.get('referrer');

  return {
    token,
    referrer
  };
};
