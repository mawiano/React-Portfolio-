import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";


export default function Footer() {
    return (
        <MDBFooter className="bg-light text-center text-white mt-5">
            <MDBContainer className="p-4 pb-0">
                <section className="mb-4">
                    <MDBBtn
                    floating
                    className="m-1"
                    style={{ backgroundColor: "#79d1ca" }}
                    href="mailto:rojanomariano@gmail.com"
                    role="button">
                         <MDBIcon fas icon="envelope" />{" "}
                    </MDBBtn>
                    <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/mariano-rojano-09800714b/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/mawiano"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
                </section>
            </MDBContainer>
            <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 255, 0.3)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          {" "}Mariano Rojano{" "}
        </a>
      </div>
        </MDBFooter>
    );
}