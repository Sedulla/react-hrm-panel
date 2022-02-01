import React, { Suspense } from 'react';
import { Loading } from './Loading';

export const Loadable = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);
