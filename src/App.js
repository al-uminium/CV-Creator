import { Component } from "react";
import './styles/App.css'
import Header from "./Header";
import Summary from "./Summary"
import Skills from "./Skills";
import Instructions from "./Instructions";
import Experience from "./Experience";
import Education from "./Education";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export default class App extends Component {

    generateApp() {
        let app = document.querySelector('.App');
        let appClone = app.cloneNode(true);
        // let printWindow = window.open('','','height="842px width="595px')
        // let educationcss = '<link rel="stylesheet" type="text/css" href="/src/styles/Education.css">'
        // let experiencecss = '<link rel="stylesheet" type="text/css" href="./styles/Experience.css">'
        // let headercss = '<link rel="stylesheet" type="text/css" href="./styles/Header.css">'
        // let indexcss = '<link rel="stylesheet" type="text/css" href="./styles/index.css">'
        // let instructionscss = '<link rel="stylesheet" type="text/css" href="./styles/Instructions.css">'
        // let skillscss = '<link rel="stylesheet" type="text/css" href="./styles/Skills.css">'
        // let summarycss = '<link rel="stylesheet" type="text/css" href="./styles/Summary.css">'
        // let appcss = '<link rel="stylesheet" type="text/css" href="./styles/App.css">'
        // printWindow.document.write('<!DOCTYPE html>')
        // printWindow.document.write('<html><head>'+appcss+indexcss+educationcss+experiencecss+headercss+instructionscss+skillscss+summarycss+'</head><body>')
        // printWindow.document.write(app.innerHTML)
        // printWindow.document.write("</body></html>")
        // printWindow.document.close()
        // printWindow.print()

        // const doc = new jsPDF();
        // doc.html(appClone, {
        //     callback: function(doc) {
        //         doc.save('test.pdf')
        //     }
        // })

        html2canvas(appClone).then(canvas => {
            document.body.appendChild(canvas)
        })
    }

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
                <button type="button" className="generate" onClick={this.generateApp}>Generate Me!</button>
            </div>
        )
    }
}