import React from "react";
import Page from './Page'

export default class Book extends React.Component {
    constructor() {
        super();
        this.state = {
            pageIndex: 0,
        }
    }

    switchpage = (pageIndex) => {
        this.setState({
            pageIndex: pageIndex,
        })
    }

    render() {
        return (
            <div>
                <Page pageIndex={this.state.pageIndex} switchpage={this.switchpage} />
            </div>
        );
    }
}
