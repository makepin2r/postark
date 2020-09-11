import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

class PostHeader extends Component {
    render() {
        const {title} = this.props;
        return (
            <Fragment>
                <div className="post-gnb-box">
                    <div className="gnb-container">
                        <div>
                            <span className="logo-box"><Link to='/'>홈으로</Link></span>
                            <h1>{title}</h1>
                        </div>
                        <div>
                            <ul className="icon-list">
                                <li className="search">검색</li>
                                <li>알림</li>
                                <li>마이페이지</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-nav-box">
                    <div className="gnb-container">

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PostHeader
