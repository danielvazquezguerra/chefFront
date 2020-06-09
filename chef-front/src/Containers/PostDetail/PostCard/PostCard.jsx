import React from 'react';
import './PostCard.scss';
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {

    return (

        <section>

            <Link className="PostCard" key={post._id} to={'/postdetails/' + post._id }>
                <img className="PostImg" src={post.imagen} alt="" />

                <div className="PostInfo">

                    <h5>{post.title}</h5>
                    <p>{post.level}</p>
            
                </div>

            </Link>
            
        </section>
    )
}

export default PostCard;
