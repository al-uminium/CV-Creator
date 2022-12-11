import React from 'react';
import './styles/ExperienceForm.css'

// initially gave start and end date input type of date, but decided that the user may have their own preference of writing their date (e.g., month-year only, or yyyy-mm-dd).

const ExperienceForm = ({ updateTitle, updateStartDate, updateEndDate, updateCompany, updateSummary, handleFormEdit }) => {
    return (
        <form className='ExperienceForm cvForm' onSubmit={(e) => handleFormEdit(e)} >
            <h4>Job Experience</h4>
            <div className='experienceFormHeader'>
                <div className='inputContainer'>
                    <label htmlFor='jobtitle'>Job Title</label>
                    <input type='text' name='jobtitle' className='jobtitle' onChange={(e) => updateTitle(e)} required='required'/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='startdate'>Start Date</label>
                    <input type='text' name='startdate' onChange={(e) => updateStartDate(e)} required='required'/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='enddate'>End Date</label>
                    <input type='text' name='enddate' onChange={(e) => updateEndDate(e)} required='required'/>
                </div>
            </div>
            <div className='inputContainer'>
                <label htmlFor='company'>Company</label>
                <input type='text' name='company' onChange={(e) => updateCompany(e)} required='required'/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='summary'>Summary</label>
                <textarea name='summary' col='1' rows='5' onChange={(e) => updateSummary(e)} required='required'/>
            </div>
            <input type='submit' className='submitBtn add edit' value={'Add'} />
        </form>
    )
}

export default ExperienceForm;
