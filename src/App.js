import { useState } from 'react'
import { Route, HashRouter as Router, Routes, NavLink } from 'react-router-dom'
import Home from './views/Home'
import { ContactIndex } from './views/ContactIndex'
import { StatisticPage } from './views/StatisticPage'
import { SignupPage } from './views/SignupPage'
import { ContactDetails } from './views/ContactDetails'
import ContactEditWrapper from './cmps/ContactEditWrapper'
import { ReactComponent as Logo } from './assets/imgs/logo.svg'
import './assets/scss/main.scss'
import RouteWrapper from './cmps/RouterWrapper'

function App() {
  const [activeRoute, setActiveRoute] = useState('Home')

  function handleRouteClick(routeName) {
    setActiveRoute(routeName)
  }

  const routeNames = ['Home', 'Contacts', 'Chart']

  return (
    <Router>
      <section
        className={`main-app ${
          activeRoute === 'Home' ? 'home-background' : 'basic-background'
        }`}
      >
        <header className='app-header'>
          <section className='header-container'>
            <div className='logo-container'>
              <Logo className='logo-icon' />
              <div>MisterBitcoin</div>
            </div>
            <div className='routes'>
              {routeNames.map((routeName, index) => (
                <NavLink
                  key={routeName + index}
                  to={`/${routeName}`}
                  active-class-name='active'
                  onClick={() => handleRouteClick(routeName)}
                  className='nav-link'
                >
                  {routeName}
                </NavLink>
              ))}
            </div>
          </section>
        </header>
        <main className='main-content-container'>
          <Routes>
            <Route  path='/' element={<RouteWrapper component={Home} />} />
            <Route path='/Home' element={<RouteWrapper component={Home} />} />
            <Route
              path='/Contacts'
              element={<RouteWrapper component={ContactIndex} />}
            />
            <Route
              path='/Chart'
              element={<RouteWrapper component={StatisticPage} />}
            />
            <Route
              path='/signup'
              element={<RouteWrapper component={SignupPage} />}
            />
            <Route
              path='/contact/edit/:id?'
              element={<RouteWrapper component={ContactEditWrapper} />}
            />
          </Routes>
        </main>
      </section>
    </Router>
  )
}

export default App
