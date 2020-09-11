import React, { Component, Fragment } from 'react'
import PostHeader from './PostHeader'
import Footer from '../../Footer/Footer'

class Post extends Component {
    render() {
        const {title} = this.props;
        return (
            <Fragment>
                <PostHeader title={title}/>
                <div className="post-container">
                    <div className="container flex flex-between-v"></div>
                </div>
                <Footer title={title}/>
            </Fragment>
        )
    }
}


export default Post