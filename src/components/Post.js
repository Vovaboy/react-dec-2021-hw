import React from 'react';

const Post = (props) => {
    const {id,title,body }= props
    return (
        <div>
            <h1>{id}</h1>
           <h3>
               {title}
           </h3>
            <h6>
                {body}
            </h6>

        </div>
    );
};

export default Post;