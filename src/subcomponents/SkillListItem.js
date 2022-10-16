import React, { Component } from 'react';
import del from '../styles/icons/x.svg'

class SkillListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }

        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }
    
    handleMouseOver() {
        this.setState({
            hover:true
        })
    }

    handleMouseOut() {
        this.setState({
            hover:false
        })
    }

    render() {
        const { skill, handleDeleteClick } = this.props
        return (
            <li onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
                {skill.skill}
                {this.state.hover ? <img src={del} alt='delete' className='del' id={skill.id} onClick={handleDeleteClick} /> : null} 
            </li>
        );
    }
}

export default SkillListItem;
