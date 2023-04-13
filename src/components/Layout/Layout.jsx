import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components';

export function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}
