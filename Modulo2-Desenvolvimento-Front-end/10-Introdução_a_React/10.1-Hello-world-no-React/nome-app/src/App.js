import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const skills = ['HTML', 'CSS', 'React', 'HTML', 'JavaScript', 'C#', 'SQL'] // adicione mais habilidades aqui
  const jsxSkills = skills.map((skill) => Task(skill)) // cria um array de tags <li>
  
  return (

    <ol>{jsxSkills}</ol>
  );
}

export default App;
