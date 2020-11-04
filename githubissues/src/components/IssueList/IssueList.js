import React, { Component } from 'react'
import Issue from '../Issue/Issue';
import './IssueList.css';
//issue list that is a parent component
export default class IssueList extends Component {
    constructor() {
        super();
        //setting the state or status to an empty array called issues
        this.state = {
            issues: []
        }
    }
    // loadissues function fetching data from API using the URL
    //then response returns json
    //then render the data and set the state to no longer have an empty array but have it equal to the data
    loadIssues = () => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    issues: data
                });
            })
    }
    //then this calls the function only after the component mounts?
    componentDidMount() {
        this.loadIssues();
    }
    //this is what displays
    render() {
        //return each issue in issues with the id and data
        return (
            <div className="IssueList">
                {this.state.issues.map((issue) => {
                    return <Issue key={issue.id} issueData={issue} />
                })}
            </div>
        )
    }
}
