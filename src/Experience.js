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
                title: '',
                company: '',
                summary: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            },
            experienceList: [{
                title: 'Red Mage',
                company: 'Final Fantasy 14, Square Enix',
                summary: 'Proident adipisicing aliqua eu ea non irure ipsum commodo dolor eu ut voluptate cupidatat. Consectetur id dolor sint nulla exercitation est cupidatat id occaecat tempor ut eu officia duis. Tempor cupidatat dolore quis incididunt non quis. Pariatur nulla sunt elit reprehenderit laborum minim enim labore. Eiusmod aute nostrud non exercitation exercitation aliquip deserunt nulla consequat et.',
                startDate: '01/01/2019',
                endDate: 'Present',
                id: uniqid()
            }],
            addClicked: false,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        let currentState = this.state.addClicked
        this.setState({
            addClicked: !currentState
        })
    }

    addNewExperience(e) {
        // to add functionality later
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
                            <ExperienceForm /> 
                            : 
                            null
                        }
                    </div>
                </div>
                {
                    experienceList.map((job) => {
                        return <ExperienceList job={job} key={job.id} />
                    })
                }
            </div>
    )
  }
}
