import React, { useState } from 'react';
import edit from '../styles/icons/edit.svg'
import del from '../styles/icons/x.svg'
import ExperienceFormEdit from './ExperienceFormEdit';

const ExperienceList = ({ job, handleDelClick, updateTitle, updateCompany, updateSummary, updateStartDate, updateEndDate, handleExperienceEdit }) => {
    const [hover, setHover] = useState(false);
    const [editClicked, setEditClicked] = useState(false);

    const handleFormEdit = (e) => {
        e.preventDefault()
        handleExperienceEdit(e)
        setEditClicked(false)
    }

    const handleMouseOut = () => {
        if (editClicked) {
            setHover(true)
        } else {
            setHover(false)    
        }
    }

    return(
        <div>
            <section className='experienceSection' onMouseOver={() => setHover(true)} onMouseOut={() => handleMouseOut()}>
                <div className='optionsContainer'>
                    {hover ?
                        <div className='options'>
                            <div> 
                                <img src={edit} alt='edit' className='edit' id={job.id} onClick={() => setEditClicked(!editClicked)} />
                                {editClicked ? 
                                    <ExperienceFormEdit
                                        job={job}
                                        updateTitle={updateTitle}
                                        updateCompany={updateCompany}
                                        updateSummary={updateSummary}
                                        updateStartDate={updateStartDate}
                                        updateEndDate={updateEndDate}
                                        handleFormEdit={handleFormEdit}
                                    />
                                    :
                                    null
                                }
                            </div>
                            <img src={del} alt='delete' className='del' id={job.id} onClick={(e) => handleDelClick(e)} />
                        </div>
                        :
                        null
                    }
                </div>
                <div className='experienceHeader'>
                    <h4>{job.title}</h4>
                    <div>
                        <div className='experienceDate'>{job.startDate} - {job.endDate}</div>
                    </div>
                </div>
                <div className='experienceCompany'>{job.company}</div>
                <div>
                    {job.summary}
                </div>
            </section>
        </div>
    )
}

export default ExperienceList;
