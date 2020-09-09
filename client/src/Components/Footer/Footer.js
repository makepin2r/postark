import React, { Component } from 'react'

class Footer extends Component {
    render() {
        
        return (
            <div className="footer">
            <div className="container flex flex-between-v flex-center-h">
                <address>&copy; 2020 {this.props.title}</address>
                <button>맨 위로</button>
            </div>
          </div>
        )
    }
}


export default Footer