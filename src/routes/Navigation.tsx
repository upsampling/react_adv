import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/react.svg';

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout" >
        <nav>
          <img src={ logo } alt="React Logo" />
          <ul>
            {
              routes.map(({to, name})=>(
                <li key={to}>
                  <NavLink 
                    to={to} 
                    className={({isActive}) => isActive ? 'nav-active' : ''} 
                  >
                    {name}
                  </NavLink>
                </li>

              ))
            }

          </ul> 
        </nav>

        <Routes>
          {
            routes.map(({path, Component})=>(
              <Route 
                key={path}
                path={path} 
                element={ <Component />} 
              />
            ))
          }
          
          <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
        </Routes>
      </div>
    
    </BrowserRouter>
  )
}

export default Navigation
