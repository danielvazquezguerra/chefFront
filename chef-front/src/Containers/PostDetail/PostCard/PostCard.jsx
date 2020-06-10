import React from 'react';
import './PostCard.scss';
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {

    const ImgURL = `http://localhost:8000/images/posts/${post?.images}`;

    return (

            <Link className="RecipeCard" key={post.id} to={'/postdetail/' + post.id }>

                <div className="ImgBox">

                    <img className="PostImg" src={ImgURL} alt="" />

                </div>


                <div className="PostInfo">

                        <h5>{post.title}</h5>
                       
                    <div className="PostDetail">

                        <div className="RecipeDet Dificult">

                                <i class="fas fa-mortar-pestle"></i>
                                <p>{post.level}</p>
                               
                                </div>

                        <div className="RecipeDet Duration">

                                <i class="far fa-clock"></i>
                                <p>{post.time}</p><p>MIN</p>
                                
                        </div>

                        <div className="RecipeDet Serves">

                            <i class="fas fa-utensils"></i>
                            <p>{post.serves}</p>

                        </div>


                    </div>
                    
            
                </div>

            </Link>
        
    )
}

export default PostCard;
