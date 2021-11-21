import React from "react";
import { Box,Text,Sbox, Content ,Scontent ,Stext ,Scolumn, Vline} from "./main.style";
import { Slogan, SloganInfoDiv, BriefSlogan, StudentImageDiv, Contact,
  DemoClassLink,  DemoClassTitle, DemoClassSubject, DemoClassInfo,
 ThumbNailDiv } from "./main.style";
import { Container, Row, Col } from "react-bootstrap";

    const DemoClassesList = {
        "DemoCourses" : [{
            "CourseName" : "LCM and PCM Tricks",
            "CourseSubject" : "Mathematics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Trigonometry Formula and Tables",
            "CourseSubject" : "Mathematics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Polynomials",
            "CourseSubject" : "Mathematics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Matrices and Determinants",
            "CourseSubject" : "Mathematics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Quantization",
            "CourseSubject" : "Mathematics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Electricity",
            "CourseSubject" : "Physics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Electric Charges and Fields",
            "CourseSubject" : "Physics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Wave Optics",
            "CourseSubject" : "Physics",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Different Versions of C Compilers",
            "CourseSubject" : "Computer Science",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Polymorphism",
            "CourseSubject" : "Computer Science",
            "CourseURL" : "/Course"
        },
        {
            "CourseName" : "Data Types",
            "CourseSubject" : "Computer Science",
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
       <Row md={4}>
            {
                DemoClassesList.DemoCourses.map((DemoCourse , DemoCourseId) => {
                    return(
                        <Col key={DemoCourseId}>
                                <DemoClass Course={DemoCourse} />
                                
                        </Col>
                    )
                })
            }
        </Row>
    );
}
          
class BoxClass extends React.Component {
    constructor(props) {
        super(props);
        this.color = ('#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'));
    }
    render() {
        return(
            <div className="d-flex flex-column">
                <Box style={{background : "linear-gradient(to top , " + this.color + " , white)",}}>
                {/*<DemoClassThumbNail src={logo} alt="Course ThumbNail" />*/}
                </Box>
               {/*} <DemoClassTitle>{this.props.Course.CourseName}</DemoClassTitle>
                <DemoClassSubject>{this.props.Course.CourseSubject}</DemoClassSubject>*/}
            </div>
        )
    }
}

 
const Main = () =>{
    return(
    <>
   <Content>
        <div>
            <h3>Mathematics</h3>
            <BoxClass/>
            <Text>
            <h3>LCM & PCM Tricks </h3>
            <h4>By Hari Krishnan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>History, Purpose & Usage</h3>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
            </Text>
        </div>
        <Vline/>
       <div>
            <h3>Course Content,</h3>
          <DemoClasses/>
          </div>
          </Content>
          </>
    );
};

   



export default Main;
