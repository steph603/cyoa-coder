import React from "react";
import pages from "../pages"

export default class Page extends React.Component {
    constructor(props) {
        super(props)

        console.log('props', props)
        console.log('this', this)
    }

    // Render the button - needs to be out here to scope 'this' correctly

    renderButton = (option) => {
        return (
            <li  class="button" key={pages[this.props.pageIndex].options.text} onClick={() => {
                    console.log('this', this)
                    this.props.switchpage(option.turnTo)
                }}>{option.text}
            </li>
        )
    }

    // Render the 'story', map through the 'options' on each page to generate enough buttons

    render() {
        return (
            <div>
                <div>  
                     <img src={pages[this.props.pageIndex].image}></img>
                    <h1>{pages[this.props.pageIndex].title}</h1>
                    <p>{pages[this.props.pageIndex].text()}</p>
                </div>   
              
                <ul>
                    {pages[this.props.pageIndex].options.map(this.renderButton)}
                </ul>

                {this.props.pageIndex > 1 ?
                <p
                    id="reset"
                    class="button"
                    onClick={() => {
                        console.log('this', this)
                        this.props.switchpage(1)    
                    }} 
                > 
                    Reset
                </p> : null}
            </div>
        );
    }
}
