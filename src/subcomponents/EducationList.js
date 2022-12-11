import React, { useState } from 'react';
import '../styles/Education.css'
import del from '../styles/icons/x.svg'

const EducationList = ({ education, handleDelClick }) => {
    const [hover, setHover] = useState(false)
    return (
        <ul>
            <li className='educationList' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div>
                    <span className='edSchool'>{education.school}</span>, <span className='edDegree'>{education.degree}</span> — <span className='edYear'>{education.year}</span>
                </div>
                {hover ? <img src={del} alt='delete' className='del' id={education.id} onClick={handleDelClick}/> : null}
            </li>
        </ul>
    )
}

// class EducationList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hover: false
//         }

//         this.handleMouseOut = this.handleMouseOut.bind(this);
//         this.handleMouseOver = this.handleMouseOver.bind(this);
//     }

//     handleMouseOut() {
//         this.setState({
//             hover: false
//         })
//     }

//     handleMouseOver() {
//         this.setState({
//             hover: true
//         })
//     }
    
//     render() {
//         const { education, handleDelClick } = this.props
//         return (
//             <ul>
//                 <li className='educationList' onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
//                     <div>
//                         <span className='edSchool'>{education.school}</span>, <span className='edDegree'>{education.degree}</span> — <span className='edYear'>{education.year}</span>
//                     </div>
//                     {this.state.hover ? <img src={del} alt='delete' className='del' id={education.id} onClick={handleDelClick}/> : null}
//                 </li>
//             </ul>
//         );
//     }
// }

export default EducationList;
