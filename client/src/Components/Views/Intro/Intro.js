import React, { Component, Fragment } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

class Intro extends Component {
    render() {
        const { title, introduction, openingDate, subscriber  } = this.props;
        return (
            <Fragment>
                <Header title={this.props.title} subTitle={this.props.subTitle} />
            <div className="main-container section--intro">
                <div className="container">
                    <div className="intro-box postype">
                        <div class="content-wrap">
                            <p className="title">안녕로봇</p>
                            {introduction && <p className="introduction">{introduction}</p>}
                            <ul>
                                <li>구독자 {subscriber}명</li>
                                <li>개설일 {openingDate}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="intro-box user">
                        <div class="content-wrap">
                            <p className="title">탁승현</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer title={this.props.title} />
            </Fragment>
        ) 
    }
}


export default Intro