import {Container,Row,Col, Button} from "react-bootstrap";

const SuccessPage = (props) =>{

    const handleBack = () =>{
        props.history.push("/")
    }

    return <Container>
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
                <div class="align-center customContainer">

                    <div className="text1 mb-20"><b>Congratulations ! Verification Complete  </b></div> 

                    <div>
                        <p><b>Tech Stack Used : </b> ExpressJS, ReactJS</p>
                    </div>
                    
                    <div>
                        Thank you
                    </div>
                    <br></br>
                    <Button onClick={handleBack}>Back</Button>

                </div>
            </Col>
        </Row>
    </Container>
}

export default SuccessPage;