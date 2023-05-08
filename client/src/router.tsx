import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ViewByLocation } from './pages/ViewByLocation'
import App from './App'
import { ViewByAdress } from './pages/ViewByAdress'
import { NavigationTopBar } from './components/NavigationTopBar'


function RoutesApp(){
  return (
    <Router>
      <NavigationTopBar/>
      <Routes>
      <Route path='/' Component={App} />
      <Route path='viewbylocation' Component={ViewByLocation}/>
      <Route path='viewbyAddress' Component={ViewByAdress}/>
      </Routes>
    
    </Router>
  )
}

export { RoutesApp }