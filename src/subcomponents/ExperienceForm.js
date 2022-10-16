import React, { Component } from 'react';
import './styles/ExperienceForm.css'

class ExperienceForm extends Component {
    render() {
        return (
            <form className='ExperienceForm cvForm'>
                <h4>Job Experience</h4>
                    <div className='experienceFormHeader'>
                    <div className='inputContainer'>
                        <label htmlFor='jobtitle'>Job Title</label>
                        <input type='text' name='jobtitle' className='jobtitle' />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='startdate'>Start Date</label>
                        <input type='date' name='startdate' />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor='enddate'>End Date</label>
                        <input type='date' name='enddate' />
                    </div>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='company'>Company</label>
                    <input type='text' name='company' />
                </div>
                <div className='inputContainer'>
                    <label htmlFor='summary'>Summary</label>
                    <textarea name='summary' col='1' rows='5' />
                </div>
                <input type='submit' className='submitBtn' value='Add'/>
            </form>
        );
    }
}

export default ExperienceForm;
