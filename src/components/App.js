import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Collections from '../pages/Collections';
import CollectionEl from '../pages/CollectionEl';
import { Layout } from './Layout';
import { Gallery } from './Gallery';
import { Subcollection } from './Subcollection';


export const App = () => {
  return (
    <div>
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
    </div>
  );
};