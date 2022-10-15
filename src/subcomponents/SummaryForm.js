import React, { Component } from 'react';
import '../styles/SummaryForm.css'

export default class SummaryForm extends Component {
    render() {
        const { updateSummary, onFormSubmit } = this.props
        return (
            <form className='SummaryForm cvForm' onSubmit={onFormSubmit}>
                <h4>Summary</h4>
                <div className='inputContainer'>
                    <label htmlFor='summary'>Enter your summary here.</label>
                    <textarea name='summary' rows='8' col='1' required='required' onChange={updateSummary} />
                </div>
                <input type='submit' value='Submit' className='submitBtn'/>
            </form>
        );
    }
}
