import React from 'react';
import './PostAll.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PostCard from '../PostCard/PostCard';
import FormAddPost from '../../AddPost/FormAddPost/FormAddPost';
import { getPostAll } from '../../../redux/actions/actions';



const PostAll = (props) => {

    useEffect(() => {

        getPostAll()

    }, [])
    
    
    return (

        <section className="PostAllWrapper">
                
            <section className="GridContainer">

                <section className="GridPosts">

                 {props?.posts?.map(post => <PostCard key={post.id} post={post}/>)}
      
                </section>


            </section>

            <section className="NewPostContainer">

                <FormAddPost />

            </section>
            
            
        </section>
    )
}

const mapStateToProps = (state) => ({posts:state?.posts, user:state?.user})
export default connect(mapStateToProps)(PostAll);

