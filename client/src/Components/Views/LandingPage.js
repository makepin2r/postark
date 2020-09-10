import React, { Component } from 'react'
import PostList from './PostList'



class LandingPage extends Component {
    state = {
        info : [
            // {
            //     id: 0,
            //     title: 'article 1',
            //     subTitle: 'test',
            //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            //     date: '2020-09-09',
            //     author: '안녕로봇'
            // },
            // {
            //     id: 1,
            //     title: 'article 2',
            //     subTitle: 'test',
            //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            //     date: '2020-09-09',
            //     author: '안녕로봇'
            // },
            // {
            //     id: 2,
            //     title: 'article 3',
            //     subTitle: 'test',
            //     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            //     date: '2020-09-09',
            //     author: '안녕로봇'
            // }
        ]
    }

    render() {
        const { title, subTitle, introduction, openingDate } = this.props;
        return (
                <div className="main-container">
                    <div className="container flex flex-between-v">
                        <div className="content">
                        <div className="wrap flex flex-between-v">
                                <p className="section-title">{this.state.info.length}개의 포스트</p>
                            </div>
                            {
                                this.state.info.length === 0 ? 
                                (<div className="no-content-box">
                                    발행된 포스트가 없습니다.
                                    <button className="btn btn-dft">새 포스트 쓰기</button>
                                </div>):
                                (<div>
                                    <PostList data={this.state.info} />
                                </div>)
                            }
                        </div>
                        <div className="side-bar">
                            <div className="section-profile">
                                <div className="section-profile-info">
                                    <span className="logo-postark"></span>
                                    <div class="text-wrap">
                                        <p className="title">{title}</p>
                                        <p>구독자 0</p>
                                    </div>
                                </div>
                                {
                                    introduction && <p class="introduction">{introduction}</p>
                                }
                                <p className="section-profile-date">개설일 {openingDate}</p>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default LandingPage
