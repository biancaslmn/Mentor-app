import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import chatapp from "./chatapp";
 

const FooterPage = () => {
  return (
     
    <MDBFooter className="font-small pt-4 mt-4"  style= {{marginTop: "0%"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Ment.Or Meant to be</h5>
            <p>
            Guiding and Developing our Future<br></br> Workers Towards their Desired Career

            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Resource Center</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Settings</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">conditions</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Mentormeantobe.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;