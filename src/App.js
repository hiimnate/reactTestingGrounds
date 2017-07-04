import React, { Component } from 'react';
import Projects from "./Components/Projects";
import ProjectItems from "./Components/ProjectItems"

class App extends Component {

    constructor(){
        super();
        this.state = {
            projects: [
                {
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        }

    }


    render() {
        console.log(this.props);
        return(
            <div className="App">
                <h1>Hello World</h1>
                <h2>Why isn't this working</h2>
                <div>
                    <div id="header">Empty Header</div>
                    <div className="container">
                        <div className="column">
                            <InboxPane />
                        </div>
                        <div className="column">Empty column</div>
                        <div className="column">Empty column</div>

                        My App
                    </div>
                </div>
                <Projects projects={this.state.projects} />
            </div>

        )
    }
};

const InboxPane = React.createClass({
    render: function(){
        return (
            <div id="inbox-pane">
                <h1>Inbox</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Chat Received</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <InboxItem />
                    </tbody>
                </table>
            </div>
        )
    }
});

const InboxItem = React.createClass({
    render: function(){
        return (
            <tr>
                <td>5pm</td>
                <td>Rami Loves Pizza</td>
                <td>Confirmed</td>
            </tr>
        )
    }
});


export default App;
