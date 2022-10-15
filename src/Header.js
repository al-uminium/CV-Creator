import { Component } from "react";
import './styles/Header.css'
import mail from './styles/icons/mail.svg'
import phone from './styles/icons/phone.svg'
import edit from './styles/icons/edit.svg'
import HeaderForm from "./subcomponents/HeaderForm";

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            header: {
                name: 'Miro Zorkasch',
                contact: '+65 91037589',
                email: 'miro.zorkasch@maelstrom.co',
            },
            name: '',
            contact: '',
            email: '',
            editClicked: false
        }

        this.handleOnClick = this.handleOnClick.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.onHeaderFormSubmit = this.onHeaderFormSubmit.bind(this);
    }

    handleOnClick() {
        let clickedState = this.state.editClicked
        this.setState({
            editClicked: !clickedState
        })
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updateContact(e) {
        this.setState({
            contact: e.target.value
        })
    }

    updateEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onHeaderFormSubmit(e) {
        e.preventDefault()
        this.setState({
            header: {
                name: this.state.name,
                contact: this.state.contact,
                email: this.state.email,
            },
            editClicked: false
        })
    }

    render() {
        const { header, editClicked } = this.state;
        return(
            <div className="FormHeader">
                <p className="name">{header.name}</p>
                <p className="contact">
                    <img src={mail} alt='phone icon'></img>
                    <span>{header.contact}</span>
                </p>
                <div className="btnContainer">
                    <img src={edit} alt='edit' className="headerEdit edit" onClick={this.handleOnClick} />
                    {editClicked ? <HeaderForm 
                        updateName={this.updateName} 
                        updateContact={this.updateContact} 
                        updateEmail={this.updateEmail}
                        onFormSubmit={this.onHeaderFormSubmit}
                        /> 
                        : 
                        null}
                </div>
                <p className="email">
                    <img src={phone} alt='email icon'></img>
                    <span>{header.email}</span>
                </p>
            </div>
        )
    }
}