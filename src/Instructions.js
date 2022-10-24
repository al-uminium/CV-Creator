import React, { Component } from 'react'
import './styles/Instructions.css'

export default class Instructions extends Component {
  render() {
    return (
      <div className='Instructions'>
        <h1>
            CV Creator
        </h1>
        <section>
            <p>
                Welcome to the CV Creator! To customize this template to fit your current CV, simply click on the respective symbols to add, edit, or remove. 
                After you're done with all that, you can generate a PDF by clicking the 'Generate Me!' button at the very bottom. The generated PDF will not have the symbols seen at all, so not to worry!
            </p>
            <p>Happy job hunting!</p>
        </section>
      </div>
    )
  }
}
