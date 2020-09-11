import React, { Component, Fragment } from 'react'
import SeriesBox from './SeriesBox'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

class SeriesPage extends Component {
    state = {
        series : [
            {
                title: 'series1',
                subTitle: '임시 시리즈',
                thumbnail:'/client/src/images/thumbnail.jpg',
                posts: [], // 포스트 아이디로 관리
            }
        ]
    }

    render() {
        const { series } = this.state;

        const list = series.map(
            info => (<SeriesBox 
                title={info.title}
                subTitle={info.subTitle}
                thumbnail={info.thumbnail}
                posts={info.posts}
                userName={this.props.userName}
            />)
        );
        return (
            <Fragment>
                <Header title={this.props.title} subTitle={this.props.subTitle} />
                <div className="main-container">
                    <div className="container flex flex-between-v">
                            <div className="content">
                                <div className="wrap flex flex-between-v">
                                    <p className="section-title">{this.state.series.length}개의 시리즈</p>
                                    <ul className="sort-type flex flex-start-v">
                                        <li>최신순</li>
                                        <li>중요도 순</li>
                                    </ul>
                                </div>
                                {
                                    this.state.series.length === 0 ? 
                                    (<div className="no-content-box">
                                        시리즈가 없습니다.
                                        <button className="btn btn-dft">새 시리즈 만들기</button>
                                    </div>):
                                    (<div>
                                        {list}
                                    </div>)
                                }
                            </div>
                            <div className="side-bar">
                                <div className="section-profile">
                                    <div className="section-profile-info">
                                        <span className="logo-postark"></span>
                                        <div class="text-wrap">
                                            <p className="title">{this.props.title}</p>
                                            <p>구독자 0</p>
                                        </div>
                                    </div>
                                    <p className="section-profile-date">개설일 {this.props.openingDate}</p>
                                </div>
                            </div>
                        </div>
                </div>
                <Footer title={this.props.title} />
            </Fragment>
        )
    }
}


export default SeriesPage