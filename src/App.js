import './App.css';
import CurriculumVitae from './components/CurriculumVitae';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/header';
import Info from './components/Info'
function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Education />
      <Experience />
      <CurriculumVitae/>
    </div>
  );
}

export default App;
