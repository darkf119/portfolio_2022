import { undefined } from 'check-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectDisplay = (props) => {

    let url = '../../../data/projectsData.json';
    const [projects, setProjects] = useState([]);
    var filteredProjects = [];

    useEffect(() => {

        setProjects([]);

        var myInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors',
            cache: 'default'
            //dataType: 'json',
            //processData: false
        };
        let projectsDataRequest = new Request(url, myInit);
        fetch(projectsDataRequest)
            .then(function (resp) {
                //console.log(resp.text());
                return resp.json();
            })
            .then(function (data) {

                setProjects((projects) => [
                    ...Object.keys(projects),
                    ...data.map(({ id, url, title, isFeatured, featuredImg, overview, contributors, skills, techSpecs, process }) => ({
                        id, url, title, isFeatured, featuredImg, overview, contributors, skills, techSpecs, process
                    })),
                ]);
                console.log('projects are ', projects);
            });
    }, []);

    const filteredByIsFeatured = () => {
        filteredProjects = projects.filter(project => project.isFeatured == true);
        console.log('featured projects displayed');
    }

    // const filterBySkillsCategory = (cat) => {
    //     filteredProjects = projects.filter(project => {
    //         cat in project.skills != undefined;
    //     });
    // }

    // <Link to={`projects/${project.id}`}>
    //                             <div className="img-container">
    //                                 <img src={project.featuredImg} alt={project.title} />
    //                             </div>
    //                         </Link>

    if (props.featured == true) {
        filteredByIsFeatured();

        return (
            <div className='project-display'>
                {
                    filteredProjects.map((project, i) =>
                        <div key={i} className='card project-card'>
                            <a href={project.url} target='_blank' rel="noopener noreferrer">
                                <div className="img-container">
                                    <img src={project.featuredImg} alt={project.title} />
                                </div>
                            </a>
                        </div>
                    )
                }
            </div>
        );
    } else {
        return (
            <div className='project-display'>
                {
                    projects.map((project, i) =>
                        <div key={i} className='card project-card'>
                            <a href={project.url} target='_blank' rel="noopener noreferrer">
                                <div className="img-container">
                                    <img src={project.featuredImg} alt={project.title} />
                                </div>
                            </a>
                        </div>
                    )
                }
            </div>
        );
    }
};

export default ProjectDisplay;
