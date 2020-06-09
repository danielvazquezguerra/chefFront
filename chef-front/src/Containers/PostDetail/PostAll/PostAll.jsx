import React from 'react';
import './PostAll.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostAll } from '../../../redux/actions/actions';
import PostCard from '../PostCard/PostCard';


const PostAll = (props) => {

    useEffect(() => {
        getPostAll()
        .catch(console.error)
     }, [])

    return (

        <section className="PostAllWrapper">

            <section className="GridContainer">

            {props.posts?.filter(posts=> props.search ? posts.title.includes(props.search):true).map(post => <PostCard key={post._id} product={post}/>)}

            </section>
            
            
        </section>
    )
}

const mapStateToProps = (state) => ({posts:state.posts , search:state.search})
export default connect(mapStateToProps) (PostAll);

