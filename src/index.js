import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css'

import Book from './Book'
import booksData from './booksData'


const BookList = () => {
  return (
    <section className='booklist'>
      {booksData.map((book) => {
        return(
          <Book
            key={book.id}
            {...book}
          >
          </Book>
        )
      })}
    </section>
  );
};

ReactDOM.render(
  <BookList />,
  document.getElementById('root')
)
