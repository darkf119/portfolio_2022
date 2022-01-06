import React from 'react'
import ProjectDisplay from '../components/ProjectDisplay'
import Section from '../components/Section'

const Projects = () => {
    return (
        <div className="projects-page">
            <Section className="hero-content">
                <div className="container">
                    <h1>All Projects</h1>
                </div>
            </Section>
            <Section>
                <ProjectDisplay featured={false} />
            </Section>
        </div>
    )
}

export default Projects
