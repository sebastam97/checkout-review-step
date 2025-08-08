import { useNavigate } from 'react-router';
import { useUrlParams } from '../../../../../shared/hooks/useUrlParams';

function useActionBar() {
  const navigate = useNavigate();
  const { referrer } = useUrlParams();

  const onGoBack = () => {
    if (!referrer) return navigate('/');
    navigate(referrer);
  };
  return { onGoBack };
}

export default useActionBar;
