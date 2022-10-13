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
                To create and customize your own CV, click on the paragraphs/bullet points to edit. To add any new items, click on the plus sign.
                After you’re done with your customization, click on the “Generate Me” to save this as a PDF.
            </p>
            <p>Happy Job Hunting!</p>
        </section>
      </div>
    )
  }
}
