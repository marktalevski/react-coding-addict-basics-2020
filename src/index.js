import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css'

const firstBook = {
  image:'https://m.media-amazon.com/images/I/91SkYC1TRHL._AC_UY218_.jpg',
  title:'The Way of Kings',
  author:'Brandon Sanderson'
}

const secondBook = {
  image:'https://images-na.ssl-images-amazon.com/images/I/71xLmdLOQ0L._AC_UL200_SR200,200_.jpg',
  title: 'Beyond Chaos',
  author: 'Jordan Peterson'
};

const App = ({ children }) => {
  return (
    <section className='booklist'>
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
        description={firstBook.description}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        excepturi nemo quibusdam voluptates repellendus vero?
      </Book>

      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
        description={secondBook.description}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Book>
    </section>
  );
};

const Book = ({ image, title, author, children }) => {
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
        {children}
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
  <App />,
  document.getElementById('root')
)
