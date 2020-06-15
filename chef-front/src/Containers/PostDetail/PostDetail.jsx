import React from 'react';
import './PostDetail.scss';
import PostContent from './PostContent/PostContent';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostAll } from '../../redux/actions/actions';



const PostDetail = (props) => {

    const AvatarImg = `http://localhost:8000/images/users/${props.user?.imagen}`;

    useEffect(() => {
        
        getPostAll()
        
    }, [])
    

    return (
     
            <section className="PostDetailWrapper">


                <div className="HeaderPostDetail">

                    <div className="AvatarBox">

                        <img className="AvatarImg" src={AvatarImg} alt=""/>
                      
                    </div>

                    <div className="HeaderProfile">

                        <div className="NameBox">

                            <h3 className="NameProfile">{props.user?.name}</h3>
                            <p className="FollowInfo">50 followers / 20 followers</p>

                        </div>

                    </div>

                    <div className="PostAdd">

                        <a href="/addpost"><i className="fas fa-plus-circle"></i></a>

                    </div>

                </div>

                {props.posts?.filter(post => props.search ? post.title.includes(props.search):true).map(post => <PostContent key={post.id} post={post}/>)}

            </section>

    )
}

const mapStateToProps = (state) => ({posts:state?.posts, user:state?.user, search:state.search})
export default connect(mapStateToProps)(PostDetail);

