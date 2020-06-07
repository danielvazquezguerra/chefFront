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

                <div className="TitleBox">
                    
                    <h3 className="PostTitle">Brochetas de Pollo con Salsa Cajún</h3>

                </div>

            </section>


            </section>


        </section>
    )
}

export default PostContent;