import React from 'react';
import './PostContent.scss';
import { HeartOutlined } from '@ant-design/icons';

const PostContent = (props) => {

    return (

        <section className="PostContentMain"> 

            <section className="PostMainLeft">


            </section>


            <section className="PostMainRight">


                <div className="PostPhotoBox">

                    <img className="PhotoPost" src="/images/brochetas.jpg" alt=""/>

                </div>

            <section className="PostInfoBottom">

                <div className="PostInfoFoot">

                    <div className="LikesBox">

                    <HeartOutlined className="HeartLike"/>

                    <p className="LikesCount">45</p>

                    </div>

                    <div className="RecipeBottom">

                        <a href="/#">RECIPE</a>

                    </div>

                </div>

            </section>

                <section className="PostTitleBox">

                    <h3 className="PostTitle">Brochetas de Pollo con Salsa Cajún</h3>

                </section>

                <section className="RecipesDetails">

                    <div className="RecipeDet Duration">

                        <i class="far fa-clock"></i>
                        <p>30 MIN</p>

                    </div>

                    <div className="RecipeDet Dificult">

                    <i class="fas fa-mortar-pestle"></i>
                    <p>EASY</p>

                    </div>

                    <div className="RecipeDet Serves">

                    <i class="fas fa-utensils"></i>
                    <p>4 SERVES</p>

                    </div>

                </section>


            </section>


        </section>
    )
}

export default PostContent;