import './App.css';
import CardList from './Components/CardList';
import Header from './Components/Header';

function App() {
  const profiles = [
    {
      login: "mrememisaac",
      id: 19990286,
      avatar_url: "https://avatars.githubusercontent.com/u/19990286?v=4",
      name: "Emem Isaac",
      company: null,
      blog: "https://www.linkedin.com/in/ememisaac/",
      location: "Abuja, Nigeria",
      bio:"Loves to solve problems that are soluble in code, eager to meet new people and make friends. Proficient with .NET/C#, Laravel/PHP and Node/JS"
    },
    {
      login: "mrememisaac",
      id: 19990287,
      avatar_url: "https://avatars.githubusercontent.com/u/19990286?v=4",
      name: "Emem Isaac",
      company: null,
      blog: "https://www.linkedin.com/in/ememisaac/",
      location: "Abuja, Nigeria",
      bio:"Loves to solve problems that are soluble in code, eager to meet new people and make friends. Proficient with .NET/C#, Laravel/PHP and Node/JS"
    }
  ];
  return (
    <div className="container-fluid">
      <Header/>
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
