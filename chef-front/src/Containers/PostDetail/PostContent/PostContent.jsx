import React from 'react';
import './PostContent.scss';
import { HeartOutlined } from '@ant-design/icons';
import { likes, dislikes } from '../../../redux/actions/actions';

const PostContent = ( { post } ) => {

    const ImgURL = `http://localhost:8000/images/posts/${post?.images}`;
    const img = `http://localhost:8000/images/users/${post?.user.imagen}`;

    return (

        <section className="PostContentMain" id={post.id}> 

            <section className="PostMainLeft">


            </section>


            <section className="PostMainRight">


                        <div className="PostPhotoBox">

                            <img className="PhotoPost" src={ ImgURL } alt=""/>

                        </div>

                    <section className="PostInfoBottom">

                        <div className="PostInfoFoot">

                            <div className="LikesBox">

                            <HeartOutlined className="HeartLike" onClick={ () =>likes(post.id,post)}/>
                            <HeartOutlined className="HeartLike" onClick={ () =>dislikes(post.id,post)}/>
                                {console.log(post)}
                            <p className='LikesCount d-flex align-items-center m-0'>{post?.likes?.length}</p>

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