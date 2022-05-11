import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setMonsters(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="container mt-4">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onSearchChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// export class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     const fetchData = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       this.setState(
//         () => {
//           return { monsters: data };
//         },
//         () => {
//           console.log(this.state);
//         }
//       );
//     };
//     fetchData();
//   }
//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     });
//     const onSearchChange = this.onSearchChange;
//     return (
//       <div className="container mt-4">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onSearchChange={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
