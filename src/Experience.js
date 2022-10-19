import './styles/Experience.css'
import uniqid from 'uniqid'
import add from './styles/icons/plus-square.svg'

import React, { Component } from 'react'
import ExperienceList from './subcomponents/ExperienceList'
import ExperienceForm from './subcomponents/ExperienceForm'

export default class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experience: {
                title: null,
                company: null,
                summary: null,
                startDate: null,
                endDate: null,
                id: uniqid()
            },
            experienceList: [{
                title: 'Red Mage',
                company: 'Final Fantasy 14, Square Enix',
                summary: 'Proident adipisicing aliqua eu ea non irure ipsum commodo dolor eu ut voluptate cupidatat. Consectetur id dolor sint nulla exercitation est cupidatat id occaecat tempor ut eu officia duis. Tempor cupidatat dolore quis incididunt non quis. Pariatur nulla sunt elit reprehenderit laborum minim enim labore. Eiusmod aute nostrud non exercitation exercitation aliquip deserunt nulla consequat et.',
                startDate: '01/01/2019',
                endDate: 'Present',
                id: uniqid()
            }, {
                title: 'Black Mage',
                company: 'Final Fantasy 14, Square Enix',
                summary: 'Proident adipisicing aliqua eu ea non irure ipsum commodo dolor eu ut voluptate cupidatat. Consectetur id dolor sint nulla exercitation est cupidatat id occaecat tempor ut eu officia duis. Tempor cupidatat dolore quis incididunt non quis. Pariatur nulla sunt elit reprehenderit laborum minim enim labore. Eiusmod aute nostrud non exercitation exercitation aliquip deserunt nulla consequat et.',
                startDate: '01/01/2020',
                endDate: 'Present',
                id: uniqid()
            }
            ],
            addClicked: false,
            editClicked: false,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleDelClick = this.handleDelClick.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
        this.updateSummary = this.updateSummary.bind(this);
        this.updateStartDate = this.updateStartDate.bind(this);
        this.updateEndDate = this.updateEndDate.bind(this);
        this.onExperienceFormSubmit = this.onExperienceFormSubmit.bind(this);
        this.onExperienceFormEdit = this.onExperienceFormEdit.bind(this)
    }

    handleOnClick() {
        this.setState({
            addClicked: !this.state.addClicked
        })
    }

    handleDelClick(e) {
        console.log(e.target.id)
        this.setState({
            experienceList: this.state.experienceList.filter(exp => exp.id !== e.target.id)
        })
    }

    updateTitle(e) {
        this.setState({
            experience: {
                title: e.target.value,
                company: this.state.experience.company,
                summary: this.state.experience.summary,
                startDate: this.state.experience.startDate,
                endDate: this.state.experience.endDate,
            }
        })
    }

    updateCompany(e) {
        this.setState({
            experience: {
                title: this.state.experience.title,
                company: e.target.value,
                summary: this.state.experience.summary,
                startDate: this.state.experience.startDate,
                endDate: this.state.experience.endDate,
                id: this.state.experience.id
            },
        })
    }

    updateSummary(e) {
        this.setState({
            experience: {
                title: this.state.experience.title,
                company: this.state.experience.company,
                summary: e.target.value,
                startDate: this.state.experience.startDate,
                endDate: this.state.experience.endDate,
                id: this.state.experience.id
            },
        })
    }

    updateStartDate(e) {
        this.setState({
            experience: {
                title: this.state.experience.title,
                company: this.state.experience.company,
                summary: this.state.experience.summary,
                startDate: e.target.value,
                endDate: this.state.experience.endDate,
                id: this.state.experience.id
            },
        })
    }

    updateEndDate(e) {
        this.setState({
            experience: {
                title: this.state.experience.title,
                company: this.state.experience.company,
                summary: this.state.experience.summary,
                startDate: this.state.experience.startDate,
                endDate: e.target.value,
                id: this.state.experience.id
            },
        })
    }

    onExperienceFormSubmit(e) {
        e.preventDefault()
        console.log(e.target)
        this.setState({
            experienceList: this.state.experienceList.concat(this.state.experience),
            experience: {
                title: null,
                company: null,
                summary: null,
                startDate: null,
                endDate: null,
                id: uniqid()
            },
            addClicked: false,
        })
    }

    onExperienceFormEdit(e) {
        let targetID = e.target.id
        //get targetted experience & the index
        let expList = this.state.experienceList;
        let targetExp = expList.filter(exp => exp.id === targetID)[0]
        const findMatch = obj => obj.id === targetID

        let targetIndex = expList.findIndex(findMatch)

        //update experiencelist with editted object
        let edittedExp = {
                title: this.state.experience.title ?? targetExp.title,
                company: this.state.experience.company ?? targetExp.company,
                summary: this.state.experience.summary ?? targetExp.summary,
                startDate: this.state.experience.startDate ?? targetExp.startDate,
                endDate: this.state.experience.endDate ?? targetExp.endDate,
                id: e.target.id
        }
        expList[targetIndex] = edittedExp

        this.setState({
            experienceList: expList
        })
    }

    render() {
        const { experienceList, addClicked } = this.state
    
        return (
            <div className='Experience'>
                <div className='sectionHeader'>
                    <h3>Experience</h3>
                    <div className='btnContainer'>
                        <img src={add} alt='add' className='add' onClick={this.handleOnClick}></img>
                        {addClicked ? 
                            <ExperienceForm 
                                updateTitle={this.updateTitle}
                                updateCompany={this.updateCompany}
                                updateSummary={this.updateSummary}
                                updateStartDate={this.updateStartDate}
                                updateEndDate={this.updateEndDate}
                                onFormSubmit={this.onExperienceFormSubmit}
                            /> 
                            : 
                            null
                        }
                    </div>
                </div>
                {
                    experienceList.map((job) => {
                        return <ExperienceList
                            updateTitle={this.updateTitle}
                            updateCompany={this.updateCompany}
                            updateSummary={this.updateSummary}
                            updateStartDate={this.updateStartDate}
                            updateEndDate={this.updateEndDate}
                            onFormSubmit={this.onExperienceFormSubmit}
                            onFormEdit={this.onExperienceFormEdit}
                            job={job} 
                            key={job.id}
                            handleDelClick={this.handleDelClick}
                            handleEditClickParent={this.handleEditClickParent}
                         />
                    })
                }
            </div>
        )
    }
}
