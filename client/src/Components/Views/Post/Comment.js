import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div className="comment-container">
               <div className="container">
               <p>0개의 댓글</p>
               <form>
                   <div className="radio-box">
                        <input type="radio" id="purchase" name="comment-type" value="purchase" disabled="disabled" />
                        <label for="purchase">후원/구매 댓글</label>
                        <input type="radio" id="default" name="comment-type" value="default" checked />
                        <label for="default">일반 댓글</label>
                        <input type="radio" id="notice" name="comment-type" value="notice" />
                        <label for="notice">공지 댓글</label>
                   </div>

                   <textarea placeholder="댓글을 입력하세요"></textarea>
                   <div className="flex flex-end-v">
                    <input type="submit" value="댓글 남기기"/>
                   </div>
               </form>
               </div>
            </div>
        )
    }
}


export default Comment