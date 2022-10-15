import React, { Component } from 'react'
import uniqid from 'uniqid'
import './styles/Skills.css'
import del from './styles/icons/x.svg'
import add from './styles/icons/plus-square.svg'

export default class Skills extends Component {
    constructor(props){
        super(props)

        this.state = {
            skillsList: [{skill: 'Teamwork', id: 1}, {skill: 'Problem Solving Skills', id: 2}, {skill: 'Echo', id: 2}, {skill: 'God of War', id: 3}, {skill: 'God of Magic', id: 4}, {skill: 'God of the Land', id:5}],
            skills: {
                skill: '',
                id: uniqid()
            },
            addClicked: false,
        }
    }

    render() {
        const { skillsList, skills } = this.state
        function ListItem(props) {
            return <li>{props.value} <img src={del} alt='delete' className='del' /></li>
        }
        const skillList = skillsList.map((skill) => 
            <ListItem key={skill.id} value={skill.skill} />
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