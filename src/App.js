import React from "react";
import logo from "./logo.svg";
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updateList = this.state.list.filter(isNotId);
    this.setState({ list: updateList });
  }

  render() {
    const dados = {
      nome: "Rafael",
      sobrenome: "Morais"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>
              Welcome {dados.nome} {dados.sobrenome}
            </code>
          </p>
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
