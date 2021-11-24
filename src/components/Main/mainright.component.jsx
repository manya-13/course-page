import React from "react";
import { Rcontent,ThumbNailDiv,DemoClassTitle,DemoClassSubject,DemoClassLink } from "./main.style";
import { Container, Row, Col } from "react-bootstrap";

export const DemoClassesList = {
    "DemoCourses" : [{
        "CourseName" : "LCM and PCM Tricks",
        "CourseSubject" : "Mathematics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Trigonometry Formula and Tables",
        "CourseSubject" : "Mathematics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Polynomials",
        "CourseSubject" : "Mathematics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Matrices and Determinants",
        "CourseSubject" : "Mathematics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Quantization",
        "CourseSubject" : "Mathematics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Electricity",
        "CourseSubject" : "Physics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Electric Charges and Fields",
        "CourseSubject" : "Physics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Wave Optics",
        "CourseSubject" : "Physics",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Different Versions of C Compilers",
        "CourseSubject" : "Computer Science",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Polymorphism",
        "CourseSubject" : "Computer Science",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    },
    {
        "CourseName" : "Data Types",
        "CourseSubject" : "Computer Science",
        "CourseTeacher" : "Hari Krishnan",
        "CourseURL" : "/Course"
    }]
};


class DemoClass extends React.Component {
constructor(props) {
    super(props);
    this.color = ('#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'));
}
render() {
    return(
        <div className="d-flex flex-column">
            <ThumbNailDiv style={{background : "linear-gradient(to top , " + this.color + " , white)",}}>
            {/*<DemoClassThumbNail src={logo} alt="Course ThumbNail" />*/}
            </ThumbNailDiv>
            <DemoClassTitle>{this.props.Course.CourseName}</DemoClassTitle>
            <DemoClassSubject>{this.props.Course.CourseSubject}</DemoClassSubject>
        </div>
    )
}
}

const DemoClasses = () => {
return(
   <Row md={1} className="">
        {
            DemoClassesList.DemoCourses.map((DemoCourse , DemoCourseId) => {
                return(
                    <Col key={DemoCourseId}>
                        <DemoClassLink to={DemoCourse.CourseURL}>
                            <DemoClass Course={DemoCourse}/>
                        </DemoClassLink> 
                        
                    </Col>
                )
            })
        }
    </Row>
);
}


const Mainright = () =>{
    return(
            <div>
            <h3>Course Content,</h3>
            <Rcontent>
          <DemoClasses/>
          </Rcontent>
          </div>
    );
};

export default Mainright;