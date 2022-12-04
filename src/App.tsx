import Header from './components/Header'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ItemListPage from './pages/ItemList'
import Navigation from './components/Navigation'
import { Helmet } from 'react-helmet'
import ItemDetailPage from './pages/ItemDetail'
import FavoritesPage from './pages/Favorites'

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
            <Route path="/items" element={<ItemListPage />} />
            <Route path="/items/:itemId" element={<ItemDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
