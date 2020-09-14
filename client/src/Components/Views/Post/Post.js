import React, { Component, Fragment } from 'react'
import PostHeader from './PostHeader'
import Footer from '../../Footer/Footer'
import UserPic from '../../../images/user-default.png'

class Post extends Component {
    render() {
        const {title} = this.props;
        return (
            <Fragment>
                <PostHeader title={title}/>
                <div className="post-container">
                    <div className="container flex flex-between-v">
                        <div className="title-box">
                            <h1>제목 없음</h1>
                            <p className="sub-title">부제목</p>
                            <div className="profile-box">
                                <img src={UserPic} alt="user profile"/>
                                <div className="text-wrap">
                                    <p className="user-name">안녕로봇</p>
                                    <date>2020.09.09</date>
                                    <span>댓글 0</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-box">
                        가 나 다 라 마 바 사 아 자 차 카 타 파 하 <br/>
                        <br/>
                        가 나 다 라 마 바 사 아 자 차 카 타 파 하 <br/>
                        <br/>
                        가 나 다 라 마 바 사 아 자 차 카 타 파 하 <br/>
                        <br/>
                        가 나 다 라 마 바 사 아 자 차 카 타 파 하 <br/>
                        <br/>
                        가 나 다 라 마 바 사 아 자 차 카 타 파 하 
                        </div>
                        <div className="postype-banner">
                            <p className="title">{title}</p>
                            <span>구독자 0</span>
                        </div>
                    </div>
                </div>
                <Footer title={title}/>
            </Fragment>
        )
    }
}


export default Post