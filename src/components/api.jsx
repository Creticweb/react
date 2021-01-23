import React from "react";
import axios from "axios";

class API extends React.Component {
  state = {
    persons: []
  }
  componentDidMount() {
    //super();
    axios.get(`http://localhost:5000/api?id=1X3kJZpB5WGoAr6R4RHlf2ZgN1SVC68lpueh9RvDeq0s`)
      .then(res => {
        const persons = res.data.['rows'];
        this.setState({ persons });
      })
  }
  render () {
    return (
      <>
      { this.state.persons.map(person => <h1>{person.title}</h1>)}
      </>
      )
  }
}
export default API;