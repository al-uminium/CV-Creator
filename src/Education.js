import React, { Component } from 'react'
import './styles/Education.css'
import uniqid from 'uniqid'
import add from './styles/icons/plus-square.svg'
import EducationList from './subcomponents/EducationList'

export default class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            education: {
                school: '',
                degree: '',
                year: '',
                id: uniqid()
            },
            educationList: [{
                school: 'Old Sharlayan',
                degree: 'Bachelor of Magicks, Black',
                year: '2019',
                id: uniqid()
            },{
                school: 'Old Sharlayan',
                degree: 'Bachelor of Magicks, White',
                year: '2019',
                id: uniqid()
            },{
                school: "Nymeia's Military School",
                degree: 'Bachelor of Tactics, Scholar',
                year: '2017',
                id: uniqid()
            }],
        }

        this.handleDelClick = this.handleDelClick.bind(this);
    }

    handleDelClick(e) {
        let targetID = e.target.id
        let currentList = this.state.educationList
        let newList = currentList.filter(obj => obj.id !== targetID)

        this.setState({
            educationList: newList
        })
    }
    render() {
        const { educationList } = this.state 
        return (
            <div className='Education'>
                <div className='sectionHeader'>
                    <h3>Education</h3>
                    <div className='btnContainer'>
                        <img src={add} alt='add' className='add' />
                    </div>
                </div>
                <section>
                        {educationList.map(edu => <EducationList education={edu} key={edu.id} handleDelClick={this.handleDelClick}/>)}
                </section>
            </div>
      )
    }
}
