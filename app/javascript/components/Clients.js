import React, { useReducer } from "react"

class Clients extends React.Component {
  render() {
    return (
      <div>
        <h1>All Clients</h1>
        <ul>
          {this.props.clients.map(client => (
            <li key={client.id}>{`${client.f_name} ${client.l_name}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

 
export default Clients
