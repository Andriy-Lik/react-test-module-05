import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Collections = lazy(() => import('../pages/Collections'));
const CollectionEl = lazy(() => import('../pages/CollectionEl'));
const Gallery = lazy(() => import('./Gallery'));
const Subcollection = lazy(() => import('./Subcollection'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='colections' element={<Collections />} />
        <Route path='colections/:colId' element={<CollectionEl />}>
          <Route path='subcollection' element={<Subcollection />} />
          <Route path='gallery' element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};