import React from 'react';
import ContentAbout from '../components/ContentAbout';
import Hero from '../components/Hero';

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <ContentAbout>
            Hello
            </ContentAbout>

        </div>
    );
}

export default AboutPage;