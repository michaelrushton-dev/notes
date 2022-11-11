import React from 'react';
import Card from './card';

type DATA = {
  data: [
    {
      title: string;
      description: string;
      image: string;
    }
  ];
};

function CardHolder(props: DATA) {
  console.log('card holder props', props);
  return (
    <div>
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
