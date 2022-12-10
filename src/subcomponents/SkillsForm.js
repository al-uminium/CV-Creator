import React from 'react';
import './styles/SkillsForm.css'

const SkillsForm = ({ handleAddSkill, updateSkillsList }) => {

    return (
        <form className='SkillsForm cvForm' onSubmit={(e) => updateSkillsList(e)}>
            <h4>Skills</h4>
            <div className='inputContainer'>
                <label htmlFor='skills'>Add a new skill</label>
                <input type='text' name='skills' onChange={(e) => handleAddSkill(e)} />
            </div>
            <input type='submit' className='submitBtn' value='Add' />
        </form>
    );
}

export default SkillsForm;
