import React, { Component } from 'react'
import uniqid from 'uniqid'
import './styles/Skills.css'
import del from './styles/icons/x.svg'
import add from './styles/icons/plus-square.svg'
import SkillsForm from './subcomponents/SkillsForm'
import SkillListItem from './subcomponents/SkillListItem'

export default class Skills extends Component {
    constructor(props){
        super(props)

        this.state = {
            skillsList: [
                {skill: 'Teamwork', id: '1'}, 
                {skill: 'Problem Solving Skills', id: '2'}, 
                {skill: 'Echo', id: '6'}, 
                {skill: 'God of War', id: '3'}, 
                {skill: 'God of Magic', id: '4'}, 
                {skill: 'God of the Land', id: '5'}],
            skills: {
                skill: '',
                id: uniqid(),
            },
            addClicked: false,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateSkill = this.updateSkill.bind(this);
        this.onSkillFormSubmit = this.onSkillFormSubmit.bind(this);
    }

    handleOnClick() {
        this.setState({
            addClicked: !this.state.addClicked,
        })
    }

    handleDeleteClick(e) {
        let targetID = e.target.id;
        console.log(e.target.id)
        let newList = this.state.skillsList.filter(skill => skill.id!==targetID)
        console.log(newList)
        this.setState({
            skillsList: newList
        })
    }

    updateSkill(e) {
        this.setState({
            skills: {
                skill: e.target.value,
                id: this.state.skills.id
            }
        })
    }

    onSkillFormSubmit(e) {
        e.preventDefault()
        this.setState({
            skillsList: this.state.skillsList.concat(this.state.skills),
            skills: {
                skill: '',
                id: uniqid()
            },
            addClicked: false
        })
    }


    render() {
        const { skillsList, addClicked } = this.state

        return (
            <div className='Skills'>
                <div className='sectionHeader'>
                    <h3>Skills</h3>
                    <div className='btnContainer'>
                       <img src={add} alt='add' className='add' onClick={this.handleOnClick}></img>
                        {addClicked ? 
                            <SkillsForm
                                updateSkill={this.updateSkill}
                                onFormSubmit={this.onSkillFormSubmit}
                            />
                            :
                            null
                        }
                    </div>
                </div>
                <section>
                    <ul>
                        {skillsList.map(skill => {
                            return <SkillListItem skill={skill} key={skill.id} handleDeleteClick={this.handleDeleteClick} />
                        })}
                    </ul>
                </section>
            </div>
        )
    }
}