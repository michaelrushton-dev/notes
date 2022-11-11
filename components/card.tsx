import React from 'react';
import Comment from './comment';
import CommentForm from './commentForm';

function Card() {
    return (
        <div>
            <h1>Card</h1>
            <CommentForm />
            <Comment />
        </div>
    );
}

export default Card;
