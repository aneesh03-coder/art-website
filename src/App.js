import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router} from 'react-router-dom'
import {isMobile,isTablet,isDesktop} from 'react-device-detect'


function App() {
  return (
    <Router>
      <section className={`bg-gray-900 select-none ${isMobile && 'h-[93vh]'} lg:h-[100vh]  decoration-transparent  ${isDesktop && 'h-[100vh]'}` }>
      <NavigationBar />
      </section>
      
  </Router>
  );
 
}

export default App;
