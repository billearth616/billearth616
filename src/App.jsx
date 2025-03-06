import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion'
import AnimatedPage from './pages/AnimatedPage';
import Contact from './pages/Contact'
import CursorSpotlight from './components/CursorSpotlight';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 relative">
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <CursorSpotlight />
        <Router>
          <AnimatePresence mode='wait'>
            <Header />
            <Routes>
              <Route path='/' element={<AnimatedPage>
                <Home/>
              </AnimatedPage>}/>
              <Route path='/about' element={<AnimatedPage>
                <AboutPage/>
              </AnimatedPage>}/>
              <Route path='/projects' element={<AnimatedPage>
                <Projects/>
              </AnimatedPage>}/>
              <Route path='/contact' element={<AnimatedPage>
                <Contact/>
              </AnimatedPage>}/>
            </Routes>
          </AnimatePresence>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App