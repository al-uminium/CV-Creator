import { Component } from "react";
import './styles/App.css'
import Header from "./Header";
import Summary from "./Summary"
import Skills from "./Skills";
import Instructions from "./Instructions";
import Experience from "./Experience";
import Education from "./Education";

export default class App extends Component {

    render() {
        return (
            <div className="Main">
                <Instructions />
                <div className="App">
                    <Header />
                    <Summary />
                    <Skills />
                    <Experience />
                    <Education />
                </div>
                <button type="button" className="generate">Generate Me!</button>
            </div>
        )
    }
}