import React, { Component } from 'react'
import './styles/Summary.css'
import edit from './styles/icons/edit.svg'

export default class Summary extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            summary: 'Minim nostrud pariatur mollit esse quis nulla veniam nulla consectetur mollit ex in. Deserunt officia exercitation proident officia laborum. Proident ex ut mollit aliqua labore. Excepteur consequat sint cillum ex occaecat ea aliqua fugiat pariatur enim. Incididunt cupidatat amet nostrud veniam mollit tempor eu magna. Ea mollit Lorem aliquip anim aliqua ex velit esse proident qui et ad cupidatat. Reprehenderit sit ipsum voluptate labore magna officia magna ipsum sunt eiusmod.'
        }
    }

    render() {
        const { summary } = this.state
        return (
            <div className='Summary'>
                <div className='sectionHeader'>
                    <h3>Summary</h3>
                    <img src={edit} alt='edit'></img>
                </div>
                <section>
                    {summary}
                </section>
            </div>
        )
    }
}
