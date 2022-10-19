import React, { Component } from 'react';
import './styles/ExperienceForm.css'

// initially gave start and end date input type of date, but decided that the user may have their own preference of writing their date (e.g., month-year only, or yyyy-mm-dd).

class ExperienceForm extends Component {
    render() {
        const { job, updateTitle, updateCompany, updateSummary, updateStartDate, updateEndDate, onFormEdit } = this.props
        return (
            <form className='ExperienceForm cvForm' onSubmit={onFormEdit} style={{left:'0%'}} id={job.id} >
                <h4>Job Experience</h4>
                    <div className='experienceFormHeader'>
                    <div className='inputContainer'>
                        <label htmlFor='jobtitle'>Job Title</label>
                        <input type='text' name='jobtitle' className='jobtitle' onChange={updateTitle} required='required' defaultValue={job.title}/>
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='startdate'>Start Date</label>
                        <input type='text' name='startdate' onChange={updateStartDate} required='required' defaultValue={job.startDate}/>
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='enddate'>End Date</label>
                        <input type='text' name='enddate' onChange={updateEndDate} required='required' defaultValue={job.endDate}/>
                    </div>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='company'>Company</label>
                    <input type='text' name='company' onChange={updateCompany} required='required' defaultValue={job.company}/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='summary'>Summary</label>
                    <textarea name='summary' col='1' rows='5' onChange={updateSummary} required='required' defaultValue={job.summary}/>
                </div>
                <input type='submit' className='submitBtn add edit' value={'Edit'} />
            </form>
        );
    } 
}

export default ExperienceForm;
