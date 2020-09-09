import React, { Component } from 'react'

class Header extends Component {
    render() {
        const {title, subTitle} = this.props;

        return (
            <div className="header">
                <div className="container flex flex-between-h">
                    <div className="gnb-bar flex flex-between-v flex-center-h">
                        <a className="logo-box">Home으로 가기</a>
                    </div>
                    <div className="title-box flex flex-center-h flex-start-v">
                        <div className="wrap">
                            <h1>{title}</h1>
                            <h2>{subTitle}</h2>
                        </div>
                    </div>
                    <div className="nav-bar">
                        <ul className="flex flex-start-v flex-center-h">
                            <li><a href="javascript:;">포스트</a></li>
                            <li><a href="javascript:;">시리즈</a></li>
                            <li><a href="javascript:;">소개</a></li>
                        </ul>
                    </div>
                </div>
          </div>
        )
    }
}

export default Header
