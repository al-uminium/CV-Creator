import React, { Component } from 'react'
import '../styles/HeaderForm.css'

export default class HeaderForm extends Component {
    
    render() {
        const { updateName, updateContact, updateEmail, onFormSubmit } = this.props
        return (
            <form className='HeaderForm cvForm' onSubmit={onFormSubmit}>
                <h4>Contact Information</h4>
                <div className='inputContainer'>
                    <label for='name'>Name</label>
                    <input type='text' name='name' onChange={updateName} required='required' />
                </div>
                <div className='inputContainer'>
                    <label for='contact'>Contact</label>
                    <input type='text' name='contact' onChange={updateContact} required='required' />
                </div>
                <div className='inputContainer'>
                    <label for='email'>Email</label>
                    <input type='text' name='email' onChange={updateEmail} required='required' />
                </div>
                <input type='submit' value='Submit' className='submitBtn'/>
            </form>
        )
    }
}
