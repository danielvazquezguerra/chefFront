import React from 'react';
import './PostCard.scss';
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {

    const ImgURL = `http://localhost:8000/images/posts/${post?.images}`;

    return (

        <section>

            <Link className="RecipeCard" key={post.id} to={'/postdetail/' + post.id }>

                <img className="PostImg" src={ImgURL} alt="" />

                <div className="PostInfo">
                    
                    <h5>{post.title}</h5>
                    <p>{post.level}</p>
            
                </div>

            </Link>
            
        </section>
    )
}

export default PostCard;
