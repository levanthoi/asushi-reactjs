// import {} from "./layout";
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layout/DefaultLayout";
import SecondLayout from './layout/SecondLayout';

function App() {
  return (
    <Router >
      <div>
        <Routes >
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if(route.layout) Layout = SecondLayout ;
            else if(route.layout === null) Layout = Fragment;
            return( 
            <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />)
          })}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
