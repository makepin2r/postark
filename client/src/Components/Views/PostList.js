import React, { Component } from 'react'
import PostBox from './PostBox'

class PostList extends Component {
    render() {
        const {data} = this.props;
        
        console.log({data})
        if(!data) return(<p>작성된 포스트가 없습니다.</p>);
        const list = data.map(
            info => (<PostBox 
                info={info}
                key={info.id}
            />)
        )

        return (
            <div className="post-list">
                <ul>
                    {list}
                </ul>
                <div className="post-list-index"></div> {/* how? */}
            </div>
        )
    }
}


export default PostList