import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Login = lazy(() => import('./components/Login'));
const Layout = lazy(() => import('./components/Layout'));
const Inbox = lazy(() => import('./components/Inbox'));
const MailInfo = lazy(() => import('./components/MailInfo'));
const NotFound = lazy(()=> import('./components/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/>} >
            <Route path='/' element={<Inbox />} />
            <Route path='/mail/:id' element={<MailInfo />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
