import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom';

class Header extends Component {

    state = {
        curIndex: 0, // cur Index - post, series, introduction
    }

    handleIndex = (e) => {
        console.log(e.target.parentNode)       ;
    }

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
                        <ul className="flex flex-start-v flex-center-h" onClick={this.handleIndex}>
                            <li><Link to={'/'} >포스트</Link></li>
                            <li><Link to={'/series'}>시리즈</Link></li>
                            <li><Link to={'/intro'}>소개</Link></li>
                        </ul>
                    </div>
                </div>
          </div>
        )
    }
}


export default Header
