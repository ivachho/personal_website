import React from 'react';
import ContentAbout from '../components/ContentAbout';
import Hero from '../components/Hero';

function ProjectsPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <ContentAbout>
                hello
            </ContentAbout>

        </div>
    );
}

export default ProjectsPage;