import React from 'react';

const Book = ({ image, title, author }) => {
   return (
   <article className='book'>
      <Image image={image} />
      <Title title={title} />
      <Author author={author} />
   </article>
   );
};

const Image = ({ image }) => {
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

export default Book;