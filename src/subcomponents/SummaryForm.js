import React from 'react';
import './styles/SummaryForm.css'

const SummaryForm = ({ setSummary, setEditSummary, editSummary, editClicked, setEditClicked }) => {

    return (
        <form 
            className='SummaryForm cvForm' 
            onSubmit={(e) => {
                e.preventDefault()
                setSummary(editSummary)
                setEditClicked(!editClicked)}
            }
        >
            <h4>Summary</h4>
            <div className='inputContainer'>
                <label htmlFor='summary'>Enter your summary here.</label>
                <textarea name='summary' rows='8' col='1' required='required' onChange={(e) => setEditSummary(e.target.value)} />
            </div>
            <input type='submit' value='Submit' className='submitBtn'/>
        </form>
    );

}

export default SummaryForm