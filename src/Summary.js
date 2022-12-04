import React, { Component, useState, useEffect } from 'react'
import './styles/Summary.css'
import edit from './styles/icons/edit.svg'
import SummaryForm from './subcomponents/SummaryForm'

const Summary = () => {
    const [summary, setSummary] = useState('Minim nostrud pariatur mollit esse quis nulla veniam nulla consectetur mollit ex in. Deserunt officia exercitation proident officia laborum. Proident ex ut mollit aliqua labore. Excepteur consequat sint cillum ex occaecat ea aliqua fugiat pariatur enim. Incididunt cupidatat amet nostrud veniam mollit tempor eu magna. Ea mollit Lorem aliquip anim aliqua ex velit esse proident qui et ad cupidatat. Reprehenderit sit ipsum voluptate labore magna officia magna ipsum sunt eiusmod.');
    const [editSummary, setEditSummary] = useState('');
    const [editClicked, setEditClicked] = useState(false);

    return (
        <div className='Summary'>
            <div className='sectionHeader'>
                <h3>Summary</h3>
                <div className='btnContainer'>
                    <img src={edit} alt='edit' className='edit' onClick={() => setEditClicked(!editClicked)} id="ignore"></img>
                    {editClicked ? 
                        <SummaryForm 
                            setSummary={setSummary}
                            editSummary={editSummary}
                            setEditSummary={setEditSummary}
                            editClicked={editClicked}
                            setEditClicked={setEditClicked}
                        />
                        :
                        null
                    }
                </div>
            </div>
            <section>
                {summary}
            </section>
        </div>
    )

}

export default Summary