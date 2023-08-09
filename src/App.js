import './App.css';
import Project from './Project';
import api from './api';

function App() {
  return (
    <>
      <h1>ReactJS Projects</h1>
      <div class="gallery">
        {api.map((item, index) => (
          <Project
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
}

export default App;
