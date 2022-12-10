import React, { useState } from 'react'
import uniqid from 'uniqid'
import './styles/Skills.css'
import add from './styles/icons/plus-square.svg'
import SkillsForm from './subcomponents/SkillsForm'
import SkillListItem from './subcomponents/SkillListItem'

const Skills = () => {
    const [skillsList, setSkillsList] = useState(
        [
            {skill: 'Teamwork', id: '1'}, 
            {skill: 'Problem Solving Skills', id: '2'}, 
            {skill: 'Echo', id: '6'}, 
            {skill: 'God of War', id: '3'}, 
            {skill: 'God of Magic', id: '4'}, 
            {skill: 'God of the Land', id: '5'}
        ],
    )

    const [skills, setSkills] = useState(
    {
        skill: '',
        id: uniqid()
    })

    const [addClicked, setAddClicked] = useState(false)
    
    const handleDeleteClick = (e) => {
        let targetID = e.target.id;
        let newList = skillsList.filter(skill => skill.id!==targetID)
        setSkillsList(newList)
    }

    const updateSkillsList = (e) => {
        e.preventDefault()
        let newSkillsList = skillsList.concat(skills)
        setSkillsList(newSkillsList)
        setSkills({
            skill: '',
            id: uniqid()
        })
        setAddClicked(false)
    }

    const handleAddSkill = (e) => {
        setSkills(
            {
                skill: e.target.value,
                id: skills.id
            }
        )
    }

    return (
        <div className='Skills'>
            <div className='sectionHeader'>
                <h3>Skills</h3>
                <div className='btnContainer'>
                    <img src={add} alt='add' className='add' onClick={() => setAddClicked(!addClicked)}></img>
                    {addClicked ? 
                        <SkillsForm
                            updateSkillsList={updateSkillsList}
                            handleAddSkill={handleAddSkill}
                        />
                        :
                        null
                    }
                </div>
            </div>
            <section>
                <ul>
                    {skillsList.map(skills => {
                        return <SkillListItem skill={skills.skill} key={skills.id} id={skills.id} handleDeleteClick={handleDeleteClick} />
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Skills