import React from 'react'
import { Card, CardText, CardTitle } from 'reactstrap'

const ProjectCard = (props) => { 

    const { title, text } = props;

    return  (
        <div className="col-sm-6">
            <div className="box">
                <Card body>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{text}</CardText>
                </Card>
            </div>
        </div>
    )
}

export default ProjectCard