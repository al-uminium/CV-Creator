import React, { Component } from 'react'
import uniqid from 'uniqid'
import './styles/Skills.css'
import add from './styles/icons/plus-square.svg'

export default class Skills extends Component {
    constructor(props){
        super(props)

        this.state = {
            skills: ['Teamwork', 'Problem Solving Skills', 'Echo', 'God of War', 'God of Magic', 'God of the Land'],
            skill: ''
        }
    }

    render() {
        const { skills, skill } = this.state
        function ListItem(props) {
            return <li>{props.value}</li>
        }
        const skillList = skills.map((skill) => 
            <ListItem key={uniqid()} value={skill} />
        )

        return (
            <div className='Skills'>
                <div className='sectionHeader'>
                    <h3>Skills</h3>
                    <img src={add} alt='add' className='add'></img>
                </div>
                <section>
                    <ul>{skillList}</ul>
                </section>
            </div>
        )
    }
}