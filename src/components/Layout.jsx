import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />

      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
