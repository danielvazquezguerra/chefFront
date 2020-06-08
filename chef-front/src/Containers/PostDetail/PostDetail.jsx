import React from 'react';
import './PostDetail.scss';
import PostContent from './PostContent/PostContent';

const PostDetail = (props) => {

    return (
     
            <section className="PostDetailWrapper">

                <div className="HeaderPostDetail">

                    <div className="AvatarBox">

                        <img className="AvatarImg" src="/images/daniel_vazquez.jpeg" alt=""/>

                    </div>

                    <div className="HeaderProfile">

                        <div className="NameBox">

                            <h3 className="NameProfile">Daniel Vazquez</h3>
                            <p className="FollowInfo">50 followers / 20 followers</p>

                        </div>

                    </div>

                    <div className="PostAdd">

                        <a href="/#"><i class="fas fa-plus-circle"></i></a>

                    </div>

                </div>

                    <PostContent />

            </section>

    )
}

export default PostDetail;
