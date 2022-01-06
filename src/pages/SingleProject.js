import React, { Component } from 'react';
import projectsData from '../data/projectsData';

class Project extends Component {

    componentDidMount() {
        "use strict";
        let projectsData = [];
        var myInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default'
            //dataType: 'json',
            //processData: false
        };
        let projectsDataRequest = new Request('../data/projectsData.json', myInit);
        fetch(projectsDataRequest)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                projectsData = data;
                console.log(projectsData);
            });
    }

    render() {
        return (
            <div>

            </div>
        )
    };
};

export default Project;

