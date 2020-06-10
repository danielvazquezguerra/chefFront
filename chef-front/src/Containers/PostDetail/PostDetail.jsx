import React from 'react';
import './PostDetail.scss';
import PostContent from './PostContent/PostContent';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostAll } from '../../redux/actions/actions';

const PostDetail = (props) => {

    useEffect(() => {

        getPostAll()
        
    }, [])

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

                        <a href="/addpost"><i className="fas fa-plus-circle"></i></a>

                    </div>

                </div>

                {props?.posts?.map(post => <PostContent key={post.id} post={post}/>)}

            </section>

    )
}

const mapStateToProps = (state) => ({posts:state?.posts})
export default connect(mapStateToProps)(PostDetail);

