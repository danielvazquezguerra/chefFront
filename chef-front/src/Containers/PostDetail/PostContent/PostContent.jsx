import React from 'react';
import './PostContent.scss';
import { HeartOutlined } from '@ant-design/icons';

const PostContent = ( {post} ) => {

    const ImgURL = `http://localhost:8000/images/posts/${post?.images}`;

    return (

        <section className="PostContentMain"> 

            <section className="PostMainLeft">


            </section>


            <section className="PostMainRight">


                        <div className="PostPhotoBox">

                            <img className="PhotoPost" src={ImgURL} alt=""/>

                        </div>

                    <section className="PostInfoBottom">

                        <div className="PostInfoFoot">

                            <div className="LikesBox">

                            <HeartOutlined className="HeartLike"/>

                            <p className="LikesCount">45</p>

                            </div>

                            <div className="RecipeBottom">

            

                            </div>

                        </div>

                    </section>

                    <section className="PostTitleBox">

    <h3 className="PostTitle">{post.title}</h3>

                    </section>

                    <section className="RecipesDetails">

                            <div className="RecipeDet Duration">

                                <i class="far fa-clock"></i>
                                 <p>{post.time}</p>

                            </div>

                            <div className="RecipeDet Dificult">

                                <i class="fas fa-mortar-pestle"></i>
                                <p>{post.level}</p>

                            </div>

                            <div className="RecipeDet Serves">

                                <i class="fas fa-utensils"></i>
                                <p>{post.serves}</p>

                            </div>

                    </section>

                    <section className="RecipeIntructions">

                        <div className="Ingredients">

                            <h3 className="HeaderRecipeIntructions"> INGREDIENTS</h3>

                        {post.ingredients}


                        </div>

                        <div className="Method">

                        <h3 className="HeaderRecipeIntructions"> METHOD</h3>

                        {post.method}

                        </div>

                    </section>


            </section>


        </section>
    )
}

export default PostContent;