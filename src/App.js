import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
  enter: 400,
  exit: 1000
};

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() =>
          this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>
          Toggle
        </button>
        <br />
        <Transition in={this.state.showBlock} timeout={animationTiming} mountOnEnter unmountOnExit>
          {/* state => entering, entered, exiting, exited */}
          {state => (
            <div
              style={{
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'all 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1,
                backgroundColor: state === 'entering' ? 'green' : 'red'
              }} />
          )}
        </Transition>
        {/* <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> */}
        {/* Or {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> : null} */}
        <Transition
          in={this.state.modalIsOpen}
          // mseconds
          timeout={300}
          mountOnEnter
          unmountOnExit >
          {state => (
            <Modal show={state} closed={this.closeModal} />
          )}
        </Transition>

        {/* <Backdrop show={this.state.modalIsOpen} /> */}
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
