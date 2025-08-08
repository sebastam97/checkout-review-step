import { createBrowserRouter, type RouteObject } from 'react-router';
import { ConfirmOrder } from '../app/confirmOrder/page/ConfirmOrder';
import { Home } from '../app/home/page/Home';
import { ReviewStep } from '../app/reviewStep/page/ReviewStep';
import { Shipping } from '../app/shipping/page/Shipping';

export const router = createBrowserRouter(
  [
    {
      path: '/review-step',
      element: <ReviewStep />
    },
    {
      path: '/validate-data',
      element: <ReviewStep />
    },
    {
      path: '/confirm-order',
      element: <ConfirmOrder />
    },
    {
      path: '/shipping',
      element: <Shipping />
    },
    {
      path: '/',
      element: <Home />
    }
  ] as RouteObject[],
  {
    basename: '/checkout-review-step'
  }
);
