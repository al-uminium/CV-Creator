import React, { Component } from 'react';
import './styles/ExperienceForm.css'

// initially gave start and end date input type of date, but decided that the user may have their own preference of writing their date (e.g., month-year only, or yyyy-mm-dd).

class ExperienceForm extends Component {
    render() {
        const { updateTitle, updateCompany, updateSummary, updateStartDate, updateEndDate, onFormSubmit } = this.props
        return (
            <form className='ExperienceForm cvForm' onSubmit={onFormSubmit} >
                <h4>Job Experience</h4>
                <div className='experienceFormHeader'>
                    <div className='inputContainer'>
                        <label htmlFor='jobtitle'>Job Title</label>
                        <input type='text' name='jobtitle' className='jobtitle' onChange={updateTitle} required='required'/>
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='startdate'>Start Date</label>
                        <input type='text' name='startdate' onChange={updateStartDate} required='required'/>
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='enddate'>End Date</label>
                        <input type='text' name='enddate' onChange={updateEndDate} required='required'/>
                    </div>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='company'>Company</label>
                    <input type='text' name='company' onChange={updateCompany} required='required'/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='summary'>Summary</label>
                    <textarea name='summary' col='1' rows='5' onChange={updateSummary} required='required'/>
                </div>
                <input type='submit' className='submitBtn add edit' value={'Add'} />
            </form>
        );
    }
}

export default ExperienceForm;
