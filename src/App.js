import React from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   };
// }

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updateList = this.state.list.filter(isNotId);
    this.setState({ list: updateList });
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input
              type="text"
              onChange={this.onSearchChange}
              value={this.state.searchTerm}
            />
          </form>

          {this.state.list.map(item => (
            <div key={item.objectID}>
              <span>
                <a href={item.url}> {item.title}</a>
              </span>
              <span> {item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points} </span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;

// if (module.hot) {
//   module.hot.accept();
// }
