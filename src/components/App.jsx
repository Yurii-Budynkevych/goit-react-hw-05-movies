import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './Header/Header';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const FilmDescr = lazy(() => import('./FilmDescr/FilmDescr'));
const Reviews = lazy(() => import('./Reviews/Revievs'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<FilmDescr />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </>
  );
};
