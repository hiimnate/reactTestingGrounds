import React, { Component } from 'react';
import ProjectItems from "./ProjectItems";



class Projects extends Component {
    render() {

        let projectItems2;
        if(this.props.projects){
            projectItems2 = this.props.projects.map(project => {
                //console.log(project);
                return (
                    <ProjectItems key={project.title} project={project}/>
                )
            });
        };
        return(
            <div className="Projects">
                {projectItems2}
            </div>

        )
    }
};

export default Projects;