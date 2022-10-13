import { Component } from "react";
import './styles/App.css'
import Header from "./Header";
import Summary from "./Summary"
import Skills from "./Skills";
import Instructions from "./Instructions";
import Experience from "./Experience";

export default class App extends Component {

    render() {
        return (
            <div className="Main">
                <Instructions />
                <form className="App">
                    <Header />
                    <Summary />
                    <Skills />
                    <Experience />
                </form>
            </div>
        )
    }
}