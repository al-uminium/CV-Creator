import { Component } from "react";
import './styles/Header.css'
import mail from './styles/icons/mail.svg'
import phone from './styles/icons/phone.svg'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Miro Zorkasch',
            contact: '+65 91037589',
            email: 'miro.zorkasch@maelstrom.co',
        }
    }

    render() {
        const { name, contact, email } = this.state;
        return(
            <div className="FormHeader">
                <p className="name">{name}</p>
                <p className="contact">
                    <img src={mail} alt='phone icon'></img>
                    <span>{contact}</span>
                </p>
                <p className="email">
                    <img src={phone} alt='email icon'></img>
                    <span>{email}</span>
                </p>
            </div>
        )
    }
}