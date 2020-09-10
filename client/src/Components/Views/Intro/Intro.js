import React, { Component } from 'react'

class Intro extends Component {
    render() {
        const { title, introduction, openingDate, subscriber  } = this.props;
        return (
            <div className="main-container">
                <div className="intro-box postype">
                    <div class="pic-wrap">
                        <span className="thumb-logo"></span>
                    </div>
                    <div class="content-wrap">
                        <p className="title">안녕로봇</p>
                        {introduction && <p>{introduction}</p>}
                        <ul>
                            <li>구독자 {subscriber}명</li>
                            <li>개설일 {openingDate}</li>
                        </ul>
                    </div>
                </div>
                <div className="intro-box user">
                    <div class="pic-wrap">
                    <span className="thumb-user"></span>
                    </div>
                    <div class="content-wrap">
                        <p className="title">탁승현</p>
                    </div>
                </div>
            </div>
        ) 
    }
}


export default Intro