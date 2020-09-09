import React, { Component } from 'react'

class PostBox extends Component {
    render() {
        const {title, subTitle, date, content, author} = this.props.info;
        
        return (
            <li className="post-box">
                    <p className="title">{title}</p>
                    <div className="article">
                        <p className="subTitle">{subTitle}</p>
                        <p className="content">{content}</p>
                    </div>
                    <div className="author-profile">
                        <span className="profile-pic">프로필 사진</span>
                        <div className="text-wrap">
                            <p className="author-name">{author}</p>
                            <date>{date}</date>
                        </div>
                    </div>
            </li>
        )
    }
}


export default PostBox