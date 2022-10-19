import React, { Component } from 'react';
import edit from '../styles/icons/edit.svg'
import del from '../styles/icons/x.svg'
import ExperienceFormEdit from './ExperienceFormEdit';

class ExperienceList extends Component {
    constructor(props) {
        super(props)
        this.state={
            hover: false,
            editClicked: false,
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.onExperienceFormEdit = this.onExperienceFormEdit.bind(this);
    }

    handleMouseEnter() {
        this.setState({
            hover: true,
        })
    }

    handleMouseLeave() {
        let isEditClicked = this.state.editClicked
        if (!isEditClicked) {
            this.setState({
                hover: false,
            })
        }
    }

    handleEditClick() {
        let currentState = this.state.editClicked
        console.log('I got clicked')
        this.setState({
            editClicked: !currentState
        })
    }

    onExperienceFormEdit(e) {
        e.preventDefault()
        this.props.onFormEdit(e)
        this.setState({
            editClicked: false
        })
    }

    render() {
        const { job, updateTitle, updateCompany, updateSummary, updateStartDate, updateEndDate, handleDelClick } = this.props

        return (
            <div>
                <section className='experienceSection' onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
                    <div className='optionsContainer'>
                        {this.state.hover ?
                            <div className='options'>
                                <div> 
                                    <img src={edit} alt='edit' className='edit' id={job.id} onClick={this.handleEditClick} />
                                    {this.state.editClicked ? 
                                        <ExperienceFormEdit
                                            job={job}
                                            updateTitle={updateTitle}
                                            updateCompany={updateCompany}
                                            updateSummary={updateSummary}
                                            updateStartDate={updateStartDate}
                                            updateEndDate={updateEndDate}
                                            onFormEdit={this.onExperienceFormEdit}
                                        />
                                        :
                                        null
                                    }
                                </div>
                                <img src={del} alt='delete' className='del' id={job.id} onClick={handleDelClick} />
                            </div>
                            :
                            null
                        }
                    </div>
                    <div className='experienceHeader'>
                        <h4>{job.title}</h4>
                        <div>
                            <div className='experienceDate'>{job.startDate} - {job.endDate}</div>
                        </div>
                    </div>
                    <div className='experienceCompany'>{job.company}</div>
                    <div>
                        {job.summary}
                    </div>
                </section>
            </div>
        );
    }
}

export default ExperienceList;
