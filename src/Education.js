import React, { useState } from 'react'
import './styles/Education.css'
import uniqid from 'uniqid'
import add from './styles/icons/plus-square.svg'
import EducationList from './subcomponents/EducationList'
import EducationForm from './subcomponents/EducationForm'

const Education = () => {
    const [education, setEducation] = useState(
        {
            school: '',
            degree: '',
            year: '',
            id: uniqid()
        }   
    )
    const defaultList = [
        {
            school: 'Old Sharlayan',
            degree: 'Bachelor of Magicks, Black',
            year: '2019',
            id: uniqid()
        },{
            school: 'Old Sharlayan',
            degree: 'Bachelor of Magicks, White',
            year: '2019',
            id: uniqid()
        },{
            school: "Nymeia's Military School",
            degree: 'Bachelor of Tactics, Scholar',
            year: '2017',
            id: uniqid()
        }
    ]
    const [educationList, setEducationList] = useState(defaultList)
    const [addClicked, setAddClicked] = useState(false);

    const updateDegree = (e) => {
        setEducation({
            ...education,
            degree: e.target.value
        })
    }

    const updateSchool = (e) => {
        setEducation({
            ...education,
            school: e.target.value
        })
    }

    const updateYear = (e) => {
        setEducation({
            ...education,
            year: e.target.value
        })
    }

    const handleEducationFormSubmit = (e) => {
        e.preventDefault()
        setEducationList(educationList.concat(education))
        setAddClicked(false)
    }

    const handleDelClick = (e) => {
        let targetID = e.target.id
        let currentList = educationList
        let newList = currentList.filter(obj => obj.id !== targetID)
        setEducationList(newList)
    }

    return (
        <div className='Education'>
            <div className='sectionHeader'>
                <h3>Education</h3>
                <div className='btnContainer'>
                    <img src={add} alt='add' className='add' onClick={() => setAddClicked(!addClicked)} />
                    {addClicked ? 
                        <EducationForm 
                            updateDegree={updateDegree} 
                            updateSchool={updateSchool} 
                            updateYear={updateYear}
                            handleEducationFormSubmit={handleEducationFormSubmit}
                        /> 
                        : 
                        null
                    }
                </div>
            </div>
            <section>
                    {educationList.map(edu => <EducationList education={edu} key={edu.id} handleDelClick={handleDelClick}/>)}
            </section>
        </div>
    )
}

export default Education
// export default class Education extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             education: {
//                 school: '',
//                 degree: '',
//                 year: '',
//                 id: uniqid()
//             },
//             educationList: [{
//                 school: 'Old Sharlayan',
//                 degree: 'Bachelor of Magicks, Black',
//                 year: '2019',
//                 id: uniqid()
//             },{
//                 school: 'Old Sharlayan',
//                 degree: 'Bachelor of Magicks, White',
//                 year: '2019',
//                 id: uniqid()
//             },{
//                 school: "Nymeia's Military School",
//                 degree: 'Bachelor of Tactics, Scholar',
//                 year: '2017',
//                 id: uniqid()
//             }],
//             addClicked: false,
//         }

//         this.handleDelClick = this.handleDelClick.bind(this);
//         this.handleAddClicked = this.handleAddClicked.bind(this);
//         this.updateSchool = this.updateSchool.bind(this);
//         this.updateDegree = this.updateDegree.bind(this);
//         this.updateYear = this.updateYear.bind(this);
//         this.handleOnSubmit = this.handleOnSubmit.bind(this);
//     }

//     handleDelClick(e) {
//         let targetID = e.target.id
//         let currentList = this.state.educationList
//         let newList = currentList.filter(obj => obj.id !== targetID)

//         this.setState({
//             educationList: newList
//         })
//     }

//     handleAddClicked() {
//         this.setState({
//             addClicked: !this.state.addClicked
//         })
//     }

//     updateSchool(e) {
//         this.setState({
//             education: {
//                 school: e.target.value,
//                 degree: this.state.education.degree,
//                 year: this.state.education.year,
//                 id: this.state.education.id
//             }
//         })
//     }

//     updateDegree(e) {
//         this.setState({
//             education: {
//                 school: this.state.education.school,
//                 degree: e.target.value,
//                 year: this.state.education.year,
//                 id: this.state.education.id
//             }
//         })
//     }

//     updateYear(e) {
//         this.setState({
//             education: {
//                 school: this.state.education.school,
//                 degree: this.state.education.degree,
//                 year: e.target.value,
//                 id: this.state.education.id
//             }
//         })
//     }

//     handleOnSubmit(e) {
//         e.preventDefault()
//         this.setState({
//             educationList: this.state.educationList.concat(this.state.education),
//             education: {
//                 school: '',
//                 degree: '',
//                 year: '',
//                 id: uniqid()
//             },
//             addClicked: false
//         })
//     }

//     render() {
//         const { educationList, addClicked } = this.state 
//         return (
//             <div className='Education'>
//                 <div className='sectionHeader'>
//                     <h3>Education</h3>
//                     <div className='btnContainer'>
//                         <img src={add} alt='add' className='add' onClick={this.handleAddClicked} />
//                         {addClicked ? 
//                             <EducationForm 
//                                 updateDegree={this.updateDegree} 
//                                 updateSchool={this.updateSchool} 
//                                 updateYear={this.updateYear}
//                                 handleOnSubmit={this.handleOnSubmit}
//                             /> 
//                             : 
//                             null
//                         }
//                     </div>
//                 </div>
//                 <section>
//                         {educationList.map(edu => <EducationList education={edu} key={edu.id} handleDelClick={this.handleDelClick}/>)}
//                 </section>
//             </div>
//       )
//     }
// }
