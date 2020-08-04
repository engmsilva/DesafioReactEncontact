import React, { Suspense, lazy } from 'react';
import { useRoutes, usePath, navigate } from 'hookrouter';
import { Spin } from 'antd';
import { getIsAuth } from './pages/Auth/localStorage'
import './App.css';

const Main = lazy(() => import('./pages/Main'));
const Auth = lazy(() => import('./pages/Auth'));

const appRoute = {
  '/': () => <Auth />,
  '/home': () => <Main />,
};

export default function Router() {
  const routerResult = useRoutes(appRoute);
  const  currentPath  =  usePath(false);

  React.useEffect(() => {
    if(getIsAuth()){
      navigate('/home');
    }
  },[currentPath])

    return (
      <>
        <Suspense
          fallback={(
            <div key="spinner" className="spinner">
              <Spin size="large"/>
            </div>
          )}
        >
          {routerResult }
        </Suspense>
      </>
    )
}