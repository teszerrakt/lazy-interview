import Header from './components/Header'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ItemList from './pages/ItemList'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div style={{ padding: 32 }}>
          <Routes>
            <Route path="/" element={<ItemList />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
