import React from "react";
import images from "../assets/images/recruitmentImages/recruitmentImages.js";
import headerPhotos from "../assets/images/headerImages/headerImages.js";
import pageData from "../assets/pageData/recruitment.js";
//COMPONENTS
import Header from "../components/Header";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";
import Faq from "../components/Faq.js";

// const {google} = require('googleapis');

/* Contact Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Recruitment extends React.Component {
  /* renders contact page */
  render() {
    let navbar = <NavBar />;
    let recruitmentParagraph = "recruitment-paragraph";
    let recruitmentTitle = "recruitment-title";
    if (this.props.mobile) {
      navbar = <MobileNavBar />;
      recruitmentParagraph = "recruitment-paragraph-m";
      recruitmentTitle = "recruitment-title-m";
    }
    return (
      <div className="home-container">
        {navbar}
        <Header
          mobile={this.props.mobile}
          photo={headerPhotos.joinHeader}
          state={this.state}
          title="Join Us"
        />
        <div className="recruitment-container">
          <div className="contact-title">Recruitment</div>
          <div className={recruitmentParagraph}>
            We are now accepting Freshman and Sophomore Transfer applications for the Fall 2023 semester! Please click
            <a href="https://www.engineering.cornell.edu/cornell-engineering-student-project-teams-join-a-team"> here </a>
            for more information.

            Sign up for our recruitment listserv <a href="https://forms.gle/2qsRt4ogRwsgTb8GA"> here!</a>


            <div className="recruitment-container">
              <div className="contact-title">Key Dates </div>
              <ul>
                <li>
                  Thursday, 9/14: Info Session 1 |
                  <a href="https://cornell.zoom.us/j/94177589571?pwd=Mm9qZVNqSWxLcjNxaXNCaVpxNkthQT09"> Zoom</a>, 7-8 PM
                </li>
                <li>
                  Tuesday, 9/19: Info Session 2 |
                  Hollister 206, 5-6 PM
                </li>
                <li>
                  Tuesday, 9/26: Info Session 3 |
                  <a href="https://cornell.zoom.us/j/94177589571?pwd=Mm9qZVNqSWxLcjNxaXNCaVpxNkthQT09"> Zoom</a>, 5-6 PM
                </li>
                <li>Thursday, 9/28:<a href="https://www.engineering.cornell.edu/cornell-engineering-student-project-teams-join-a-team"> Applications </a> Due for Freshmen and Sophmore Transfers @ 11:59 PM
                </li>
              </ul>
              Note: All applications will be reviewed at the same time. All majors are encouraged to apply!
            </div>
          </div>
          <div className={recruitmentParagraph}></div>
          {/* <div className={recruitmentParagraph}>
            <b>Final Info Session: 9/28 5-6pm EST in Hollister 312</b>
          </div>
          <div className={recruitmentParagraph}>
            <a
              className="freshman-form"
              href="https://cornell.zoom.us/j/92547459277?pwd=Q0VrUzVsL2E3Ym5pVk9wTlQrNlF2dz09"
            >
              <b>Click here to join through Zoom. Password: EWH</b>
            </a>
          </div> */}
          {/* <img
            className="timeline-photo"
            alt="timeline"
            src={images.timeline1}
          /> */}
          <div className="faqs-container">
            <div className={recruitmentTitle}>Frequently Asked Questions</div>
            <div className="faq-dropdowns-container">
              {pageData.questions.map((q, index) => {
                return (
                  <Faq
                    question={q.question}
                    answer={q.answer}
                    index={index}
                    mobile={this.props.mobile}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div >
    );
  }
}
