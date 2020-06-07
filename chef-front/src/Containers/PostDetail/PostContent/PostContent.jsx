import React from 'react';
import './PostContent.scss';
import { HeartOutlined } from '@ant-design/icons';

const PostContent = (props) => {

    return (

        <section className="PostContentMain"> 

            <section className="PostContentUp">

                <div className="PostInfoLeft">



                </div>

                <div className="PostPhotoBox">



                </div>

            </section>

            <section className="PostInfoBottom">

                <div className="BlankSpace"></div>

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

        </section>
    )
}

export default PostContent;