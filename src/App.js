import './App.css';
import CurriculumVitae from './components/CurriculumVitae';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/Info'
function App() {
  return (
    <div className="App">
      <Info />
      <Education />
      <Experience />
      <CurriculumVitae />
    </div>
  );
}

export default App;
