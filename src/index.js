import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css'

const books = [
  {
  id: '1',
  image:'https://m.media-amazon.com/images/I/91SkYC1TRHL._AC_UY218_.jpg',
  title:'The Way of Kings',
  author:'Brandon Sanderson'
  },
  {
  id: '2',
  image:'https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L._AC_UL200_SR200,200_.jpg',
  title: 'Beyond Chaos',
  author: 'Jordan Peterson'
  },
]



const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
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

const Book = ({ image, title, author }) => {
  return (
    <article 
      className='book'>
      <Image
        image={image} />
      <Title 
        title={title} />
      <Author 
        author={author}
      />
    </article>
  );
}

export const Image = ({ image }) => {
  return (
    <article>
      <img src={image} alt='' />
    </article>
  );
};

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Author = ({ author }) => {
  return (
    <h4
      style={{
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '.25rem',
      }}
    >
      {author}
    </h4>
  );
};

ReactDOM.render(
  <BookList />,
  document.getElementById('root')
)
