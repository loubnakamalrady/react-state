import React, { Component } from 'react';

class App extends Component {
  // Defining the initial state with (Person, Object, and timeInterval())
  state = {
    person: {
      fullName: 'Harrold Styles',
      bio: 'Ambitious React Developer',
      imgSrc: 'nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg',
      profession: 'React Developer',
      shows: true
    },
    timeInterval: 0
  }

  // Timer started when component mounted
  componentDidMount() {
    //setInterval() is to update timeInterval in every second
    this.interval = setInterval(() => {
      // Using prevState to update timeInterval
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  // Timer is cleared when component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle shows property of person object
  toggleShows = () => {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        shows: !prevState.person.shows
      }
    }));
  }

  // Render method to display JSX elements
  render() {
    // Destructuring
    const { fullName, bio, imgSrc, profession, shows } = this.state.person;
    const { timeInterval } = this.state;

    return (
      <div className="App">
        <h1>{fullName}</h1>
        {shows && (
          <>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </>
        )}
        {/* Button to toggle shows property */}
        <button onClick={this.toggleShows}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {/* Paragraph element to display time interval */}
        <p>Time since mount: {timeInterval}s</p>
      </div>
    );
  }
}

export default App;