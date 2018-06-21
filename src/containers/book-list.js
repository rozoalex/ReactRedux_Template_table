import React, { Component } from 'react';
import { connect } from 'react-redux'; // The glue between react and redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
        return (
          <li 
            key={book.title} 
            onClick={() => this.props.selectBook(book)}
            className='list-group-item'>{book.title}
          </li>
        );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // glue function 
  // whatever is returned will be the props of 
  // BookList 
  return {
    books: state.books
  };
} 

// Anything returned from this func will end uo as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Wherever select book is called 
  // the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// connect takes the glue function and
// returns a function who takes in the class(component) BookList