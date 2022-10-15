import React, { Component } from 'react'
import '../styles/HeaderForm.css'

export default class HeaderForm extends Component {
    render() {
        return (
            <form className='HeaderForm cvForm'>
                <h4>Contact Information</h4>
                <div className='inputContainer'>
                    <label for='name'>Name</label>
                    <input type='text' name='name' />
                </div>
                <div className='inputContainer'>
                    <label for='contact'>Contact</label>
                    <input type='text' name='contact' />
                </div>
                <div className='inputContainer'>
                    <label for='email'>Email</label>
                    <input type='text' name='email' />
                </div>
                <input type='submit' value='Submit' className='submitBtn'/>
            </form>
        )
    }
}
