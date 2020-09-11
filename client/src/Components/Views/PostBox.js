import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import Btn from '../../images/btn-dropdown.png';
// import BtnHover from '../../images/btn-dropdown-hover.png';

class PostBox extends Component {
    state = { 
        isDropDown: false,
    }

    toggleIsDropdown = () => {
        this.setState({
            isDropDown: !(this.state.isDropDown)
        });
    }

    render() {
        const {isDropDown} = this.state;
        const {title, subTitle, date, content, author, id} = this.props.info;
        const {key} = this.props;

        function splitContent (data) {
            if(data.length > 100){
                return data.substr(0, 100)+"...";
            }
        }
        
        return (
            <li className="post-box">
                <Link to={`/post/${id}`}>
                    <p className="title">{title}</p>
                    <div className="article">
                        <p className="content"><span className="subTitle">{subTitle}</span>{splitContent(content)}</p>
                    </div>
                    </Link>
                    <div className="author-profile flex flex-between-v flex-center-h">
                        <div class="wrap flex flex-start-v flex-center-h">
                            <span className="profile-pic">프로필 사진</span>
                            <div className="text-wrap">
                                <p className="author-name">{author}</p>
                                <date>{date}</date>
                            </div>
                            <div className={`dropdown-wrap ${isDropDown ? `clicked` : ``}`}>
                                <button className="btn-dropdown" onClick={this.toggleIsDropdown}>메뉴 보기</button>
                                <div className="menu-dropdown">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </li>
        )
    }
}


export default PostBox
