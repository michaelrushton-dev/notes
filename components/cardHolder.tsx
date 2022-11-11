import React from 'react';
import Card from './card';

type POST = {
  data: [
    {
      title: string;
      description: string;
      image: string;
    }
  ];
};

function CardHolder(props: POST) {
  console.log('card holder props', props.data);
  return (
    <div>
      <p>hey</p>
      {/* {props.data[0].title} */}
      {/* {props.data.map((post, index) => {
        return (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        );
      })} */}
    </div>
  );
}

export default CardHolder;
