import React, { Component } from 'react'
import './styles/Education.css'
import add from './styles/icons/plus-square.svg'

export default class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            school: 'Old Sharlayan',
            degree: 'Bachelor of Magicks, Black',
            year: '2019',
            educationList: [],
        }
    }
    render() {
        const { school, degree, year, educationList } = this.state 
        return (
            <div className='Education'>
                <h3 className='sectionHeader'>Education</h3>
                <section>
                    <div><span className='edSchool'>{school}</span>, <span className='edDegree'>{degree}</span> - <span className='edYear'>{year}</span></div>
                </section>
            </div>
      )
    }
}
