import './styles/Experience.css'
import uniqid from 'uniqid'
import add from './styles/icons/plus-square.svg'

import React, { useState } from 'react'
import ExperienceList from './subcomponents/ExperienceList'
import ExperienceForm from './subcomponents/ExperienceForm'

const Experience = () => {
    const [addClicked, setAddClicked] = useState(false)
    const defaultList = [
        {
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
    ]
    const [experienceList, setExperienceList] = useState(defaultList)
    const [experience, setExperience] = useState(
        {
            title: null,
            company: null,
            summary: null,
            startDate: null,
            endDate: null,
            id: uniqid()
        }
    )

    const updateExperienceList = (e) => {
        e.preventDefault()
        let newExperienceList = experienceList.concat(experience)
        setExperienceList(newExperienceList)
        setAddClicked(false)
    }

    const updateTitle = (e) => {
       setExperience({
            ...experience,
            title: e.target.value
       })
    }

    const updateStartDate = (e) => {
        setExperience({
            ...experience,
            startDate: e.target.value
        })
    }

    const updateEndDate = (e) => {
        setExperience({
            ...experience,
            endDate: e.target.value
        })
    }

    const updateCompany = (e) => {
        setExperience({
            ...experience,
            company: e.target.value
        })
    }

    const updateSummary = (e) => {
        setExperience({
            ...experience,
            summary: e.target.value
        })
    }

    const handleDelClick = (e) => {
        setExperienceList(experienceList.filter(exp => exp.id !== e.target.id))
    }

    const handleExperienceEdit = (e) => {
        let targetID = e.target.id
        //get targetted experience & the index
        let expList = experienceList;
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

        setExperienceList(expList)
    }

    return (
        <div className='Experience'>
            <div className='sectionHeader'>
                <h3>Experience</h3>
                <div className='btnContainer'>
                    <img src={add} alt='add' className='add' onClick={() => setAddClicked(!addClicked)}></img>
                    {addClicked ? 
                        <ExperienceForm 
                            updateTitle={updateTitle}
                            updateCompany={updateCompany}
                            updateSummary={updateSummary}
                            updateStartDate={updateStartDate}
                            updateEndDate={updateEndDate}
                            updateExperienceList={updateExperienceList}
                        /> 
                        : 
                        null
                    }
                </div>
            </div>
            {
                experienceList.map((job) => {
                    return <ExperienceList
                        job={job}
                        key={job.id}
                        handleDelClick={handleDelClick}
                        updateTitle={updateTitle}
                        updateCompany={updateCompany}
                        updateSummary={updateSummary}
                        updateStartDate={updateStartDate}
                        updateEndDate={updateEndDate}
                        handleExperienceEdit={handleExperienceEdit}
                    />
                })
            }
        </div>
    )
}

export default Experience