import Header from './components/Header'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ItemList from './pages/ItemList'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<ItemList />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
