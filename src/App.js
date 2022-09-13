import './App.css';
import CurriculumVitae from './components/CurriculumVitae';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/header';
import Form from './components/Form'
import Info from './components/Info'
function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <CurriculumVitae/>
    </div>
  );
}

export default App;
