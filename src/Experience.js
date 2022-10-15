import './styles/Experience.css'
import edit from './styles/icons/edit.svg'
import add from './styles/icons/plus-square.svg'

import React, { Component } from 'react'

export default class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Red Mage',
            company: 'Final Fantasy 14, Square Enix',
            jobSummary: 'Proident adipisicing aliqua eu ea non irure ipsum commodo dolor eu ut voluptate cupidatat. Consectetur id dolor sint nulla exercitation est cupidatat id occaecat tempor ut eu officia duis. Tempor cupidatat dolore quis incididunt non quis. Pariatur nulla sunt elit reprehenderit laborum minim enim labore. Eiusmod aute nostrud non exercitation exercitation aliquip deserunt nulla consequat et.',
            startDate: '01/01/2019',
            endDate: 'Present',
            experienceList: [],
        }
    }

    addNewExperience(e) {
        // to add functionality later
    }

    render() {
        const { title, company, jobSummary, startDate, endDate, experienceList } = this.state
    
        return (
            <div className='Experience'>
                <div className='sectionHeader'>
                    <h3>Experience</h3>
                    <img src={add} alt='add' className='add'></img>
                </div>
                <section>
                    <div className='experienceHeader'>
                        <h4>{title}</h4>
                        <div>
                            <div className='experienceDate'>{startDate} - {endDate}</div>
                        </div>
                    </div>
                    <div className='experienceCompany'>{company}</div>
                    <div>
                        {jobSummary}
                    </div>
                </section>
            </div>
    )
  }
}