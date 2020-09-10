import React, { Component } from 'react'

class SeriesBox extends Component {
    render() {
        const {title, subTitle, thumbnail, posts, userName } = this.props;
        return (
            <div className="series-box">
                <img src={thumbnail}/>
                <div className="text-wrap">
                    <div>
                        <p className="title">{title}</p>
                        <p className="sub-title">{subTitle}</p>
                    </div>
                    <p className="author">{userName}</p>
                </div>
            </div>
        )
    }
}


export default SeriesBox