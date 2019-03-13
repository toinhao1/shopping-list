import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default class DeleteTodo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    axios
      .get('http://localhost:4000/todos/' + this.props.match.params.id)
      .then((res) => {
        console.log('here');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // onDeleteClick = (id) => {
  //   axios
  //     .delete(`todos/` + this.props._id)
  //     .then((res) => res.render('/'))
  //     .catch((err) => console.log(err));
  // };
  onClick(e) {
    axios
      .delete('http://localhost:4000/todos/' + this.props.match.params.id)
      .then((res) => console.log('Success'))
      .catch((err) => {
        console.log(err);
      });

    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h4>Are you sure you want to delete this item?</h4>
        <button
          className="remove-btn"
          color="danger"
          size="sm"
          onClick={this.onClick.bind(this)}
        >
          &times;
        </button>
      </div>
    );
  }
}
