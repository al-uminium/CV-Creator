import React, { Component } from 'react';

class EducationForm extends Component {
    render() {
        const { updateSchool, updateDegree, updateYear, handleOnSubmit } = this.props
        return (
            <form className='EducationForm cvForm' onSubmit={handleOnSubmit}>
                <h4>Education History</h4>
                <div className='inputContainer'>
                    <label htmlFor='school'>School</label>
                    <input type='text' name='school' onChange={updateSchool}/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='degree'>Degree</label>
                    <input type='text' name='degree' onChange={updateDegree}/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='year'>Year</label>
                    <input type='text' name='year' onChange={updateYear}/>
                </div>
                <input type='submit' className='submitBtn add' value={'Add'} />
            </form>
        );
    }
}

export default EducationForm;
