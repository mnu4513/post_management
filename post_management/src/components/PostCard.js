import React from 'react';

const PostCard = (props) => {
    const { title, description, authorId } = props;
    return (
        <div className="card">
            <h2> {title} </h2>
            <h4> {description} </h4>
            <h4> {authorId} </h4>
            {/* <h3> {cusines.join(', ')} </h3> */}
        </div>
    )
};

export default PostCard;