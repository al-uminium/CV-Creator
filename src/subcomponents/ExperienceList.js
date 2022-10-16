import React, { Component } from 'react';
import edit from '../styles/icons/edit.svg'

class ExperienceList extends Component {
    render() {
        const { job } = this.props
        return (
            <div>
                <section>
                    <div className='experienceHeader'>
                        <h4>{job.title}</h4>
                        <div>
                            <div className='experienceDate'>{job.startDate} - {job.endDate}</div>
                        </div>
                    </div>
                    <div className='experienceCompany'>{job.company}</div>
                    <div>
                        {job.summary}
                    </div>
                </section>
            </div>
        );
    }
}

export default ExperienceList;
