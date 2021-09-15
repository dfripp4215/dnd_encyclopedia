import { Component } from 'react'
import axios from 'axios'
import QuickLinks from './QuickLinks'

export class Articles extends Component {
    state = {
        apiRes: {}
    }

    componentDidMount() {
        axios.get(' https://api.open5e.com/')
            .then(res => this.setState({
                apiRes: res.data
            }))
    }
    
    render() {
        return (
            <div className='main-content'>
                <ul>
                    <QuickLinks state={this.state} />
                </ul>
            </div>
        )
    }
}