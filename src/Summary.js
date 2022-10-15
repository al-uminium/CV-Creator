import React, { Component } from 'react'
import './styles/Summary.css'
import edit from './styles/icons/edit.svg'
import SummaryForm from './subcomponents/SummaryForm'

export default class Summary extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            summary: 'Minim nostrud pariatur mollit esse quis nulla veniam nulla consectetur mollit ex in. Deserunt officia exercitation proident officia laborum. Proident ex ut mollit aliqua labore. Excepteur consequat sint cillum ex occaecat ea aliqua fugiat pariatur enim. Incididunt cupidatat amet nostrud veniam mollit tempor eu magna. Ea mollit Lorem aliquip anim aliqua ex velit esse proident qui et ad cupidatat. Reprehenderit sit ipsum voluptate labore magna officia magna ipsum sunt eiusmod.',
            editSummary: '',
            editClicked: false,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
        this.changeSummary = this.changeSummary.bind(this);
        this.onSummaryFormSubmit = this.onSummaryFormSubmit.bind(this);
    }

    handleOnClick() {
        let clickedState = this.state.editClicked;
        this.setState({
            editClicked: !clickedState
        });
    }

    changeSummary(e) {
        this.setState({
            editSummary: e.target.value
        })
    }

    onSummaryFormSubmit(e) {
        e.preventDefault()
        this.setState({
            summary: this.state.editSummary
        })
    } 

    render() {
        const { summary, editClicked } = this.state
        return (
            <div className='Summary'>
                <div className='sectionHeader'>
                    <h3>Summary</h3>
                    <div className='btnContainer'>
                        <img src={edit} alt='edit' className='edit' onClick={this.handleOnClick}></img>
                        {editClicked ? 
                            <SummaryForm 
                                updateSummary={this.changeSummary}
                                onFormSubmit={this.onSummaryFormSubmit}
                            />
                            :
                            null
                        }
                    </div>
                </div>
                <section>
                    {summary}
                </section>
            </div>
        )
    }
}
