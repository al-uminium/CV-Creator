import React from 'react';

const EducationForm = ({ updateSchool, updateDegree, updateYear, handleEducationFormSubmit }) => {
    return (
        <form className='EducationForm cvForm' onSubmit={(e) => handleEducationFormSubmit(e)}>
            <h4>Education History</h4>
            <div className='inputContainer'>
                <label htmlFor='school'>School</label>
                <input type='text' name='school' onChange={(e) => updateSchool(e)}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='degree'>Degree</label>
                <input type='text' name='degree' onChange={(e) => updateDegree(e)}/>
            </div>
            <div className='inputContainer'>
                <label htmlFor='year'>Year</label>
                <input type='text' name='year' onChange={(e) => updateYear(e)}/>
            </div>
            <input type='submit' className='submitBtn add' value={'Add'} />
        </form>        
    )
}

// class EducationForm extends Component {
//     render() {
//         const { updateSchool, updateDegree, updateYear, handleOnSubmit } = this.props
//         return (
//             <form className='EducationForm cvForm' onSubmit={handleOnSubmit}>
//                 <h4>Education History</h4>
//                 <div className='inputContainer'>
//                     <label htmlFor='school'>School</label>
//                     <input type='text' name='school' onChange={updateSchool}/>
//                 </div>
//                 <div className='inputContainer'>
//                     <label htmlFor='degree'>Degree</label>
//                     <input type='text' name='degree' onChange={updateDegree}/>
//                 </div>
//                 <div className='inputContainer'>
//                     <label htmlFor='year'>Year</label>
//                     <input type='text' name='year' onChange={updateYear}/>
//                 </div>
//                 <input type='submit' className='submitBtn add' value={'Add'} />
//             </form>
//         );
//     }
// }

export default EducationForm;
