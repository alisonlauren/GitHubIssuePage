import React from 'react'
import './Issue.css'
import Labels from "../Labels/Labels"
//props is used from a parent componenet
export default function Issue(props) {
    return (
        //all code was stolen using the inspect tool in the browser
        <div className="Issue">
            <svg class="octicon octicon-issue-opened open"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true">
                <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
            <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
            {props.issueData.title}
            {props.issueData.labels.map((label) => {
                return <Labels key={label.Id} labelData={label.name} labelColor={label.color} />
            })}
        </div>
    )
}

//line 17: rendering the issueData title established in issuelist.js
//line 18: and map over all the labels and return the id, the name and the color
