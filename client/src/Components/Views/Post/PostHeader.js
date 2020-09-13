import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import ImgBtnSearch from '../../../images/ico-search.png'

class PostHeader extends Component {
    render() {
        const {title} = this.props;
        return (
            <Fragment>
                <div className="post-gnb-box">
                    <div className="gnb-container">
                        <div>
                            <span className="logo-box"><Link to='/'>홈으로</Link></span>
                            <p className="postype-title">{title}</p>
                        </div>
                        <div>
                            <ul className="icon-list">
                                <li className="search">검색</li>
                                <li className="noti">알림</li>
                                <li className="mypage">마이페이지</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-nav-box">
                    <div className="gnb-container">
                        <button className="btn-hover home">홈으로 가기</button>
                        <div className="nav-wrap">
                            <button className="btn-hover prev-article">이전글</button>
                            <p className="article-title">제목 없음</p>
                            <button className="btn-hover next-article">다음글</button>
                        </div>
                        <ul className="icon-list">
                                <li className="bookmark">북마크하기</li>
                                <li className="settings">설정</li>
                            </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PostHeader
