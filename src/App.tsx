import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { JobaRoutes } from './utils';
import { ScrollTop } from './components';
import { GlobalLayout } from './layout';
import { Home } from './page';

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={JobaRoutes.homepage}>
        <Route element={<ScrollTop />}>
          <Route element={<GlobalLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
