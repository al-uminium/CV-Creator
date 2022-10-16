import React, { Component } from 'react';
import './styles/SkillsForm.css'

class SkillsForm extends Component {
    
    render() {
        const { updateSkill, onFormSubmit } = this.props
        return (
            <form className='SkillsForm cvForm' onSubmit={onFormSubmit}>
                <h4>Skills</h4>
                <div className='inputContainer'>
                    <label htmlFor='skills'>Add a new skill</label>
                    <input type='text' name='skills' onChange={updateSkill} />
                </div>
                <input type='submit' className='submitBtn' value='Add' />
            </form>
        );
    }
}

export default SkillsForm;
