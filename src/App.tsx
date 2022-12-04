import Header from './components/Header'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ItemList from './pages/ItemList'
import Navigation from './components/Navigation'
import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://api.themoviedb.org" />
      </Helmet>
      <Router>
        <Header />
        <Navigation />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Navigate to="/items" replace />} />
            <Route path="/items" element={<ItemList />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
