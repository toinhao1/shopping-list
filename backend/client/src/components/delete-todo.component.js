import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

export default class DeleteTodo extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:4000/todos/' + this.props.match.params.id)
      .then((res) => {
        console.log('Item Loaded');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onClick(e) {
    axios
      .delete('http://localhost:4000/todos/' + this.props.match.params.id)
      .then((res) => console.log('Item Deleted'))
      .catch((err) => {
        console.log(err);
      });
    alert('Item Deleted');
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
