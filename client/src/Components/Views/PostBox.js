import React, { Component } from 'react'

class PostBox extends Component {
    render() {
        const {title, subTitle, date, content, author} = this.props.info;

        function splitContent (data) {
            if(data.length > 100){
                return data.substr(0, 100)+"...";
            }
        }
        
        return (
            <li className="post-box">
                    <p className="title">{title}</p>
                    <div className="article">
                        <p className="content"><span className="subTitle">{subTitle}</span>{splitContent(content)}</p>
                    </div>
                    <div className="author-profile flex flex-between-v flex-center-h">
                        <div class="wrap flex flex-start-v flex-center-h">
                            <span className="profile-pic">프로필 사진</span>
                            <div className="text-wrap">
                                <p className="author-name">{author}</p>
                                <date>{date}</date>
                            </div>
                        </div>
                    </div>
            </li>
        )
    }
}


export default PostBox