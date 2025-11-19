import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { FavouritePage } from './pages/FavouritePage/FavouritePage';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';

export const Root = () => (
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='favourite' element={<FavouritePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
