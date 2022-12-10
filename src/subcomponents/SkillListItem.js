import React, { useState } from 'react';
import del from '../styles/icons/x.svg'


const SkillListItem = ({ skill, id, handleDeleteClick }) => {
    const [hover, setHover] = useState(false);

    return(
        <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {skill}
            {hover ? <img src={del} alt='delete' className='del' id={id} onClick={handleDeleteClick} /> : null} 
        </li>
    )
}

export default SkillListItem;
