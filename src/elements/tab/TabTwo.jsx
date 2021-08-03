import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Awards",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/123HHeoFNDnz2xs4J-YTEc06QmmZ-huR6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Front-End Development<span> - Client Side</span>
                          </a>
                          Rich interfaces built with technologies such as
                          ReactJS, CSS3, and HTML5.
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/123HHeoFNDnz2xs4J-YTEc06QmmZ-huR6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Back-End Development<span> - Server Side</span>
                          </a>
                          Optimize backend applications for maximum speed
                          scalability, and security with Node.JS and Django.{" "}
                          <br />
                          Design and implement backend web architecture, such as
                          servers, databases, and APIs.
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/123HHeoFNDnz2xs4J-YTEc06QmmZ-huR6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Soft Skills <span> - Being Human :)</span>
                          </a>
                          It is important to be a good person for yourself and
                          others around you.
                          <br /> I am a person that listens to others, is an
                          effective communicator, and always carries a positive
                          attitude :)
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a
                            href="https://interiorinvestments.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Fullstack Engineer
                            <span> - Interior Investments</span>
                          </a>{" "}
                          Jan 2021 - Present
                          <li style={{ listStyleType: "disc" }}>
                            Scaled Advantage and Microsoft Access databases and
                            converted them into Postgres databases.
                          </li>
                          <li style={{ listStyleType: "disc" }}>
                            Built an internal application that will save
                            Interior Investments (II) over 600 hours of employee
                            time per year.
                          </li>
                          <li style={{ listStyleType: "disc" }}>
                            Built a client-side application that is used by
                            various Fortune 500 clients. In addition, the
                            application will help II drive up revenue annually.
                          </li>
                        </li>
                        <li>
                          <a
                            href="https://www.collegeboard.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            SAT Tutor<span> - College Board</span>
                          </a>{" "}
                          2017 - 2021
                          <li style={{ listStyleType: "disc" }}>
                            I have helped over 20 students get into top school
                            such as Yale, MIT, Darthmouth, and Stanford.
                          </li>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/teamopticsolutions/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Technician<span> - Optic Solutions</span>
                          </a>{" "}
                          2020-2020
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="https://drive.google.com/file/d/123HHeoFNDnz2xs4J-YTEc06QmmZ-huR6/view?usp=sharing">
                            Bachelor of Mathematics
                            <span> - Harvard University, Cambridge, MA</span>
                          </a>{" "}
                          2020
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/123HHeoFNDnz2xs4J-YTEc06QmmZ-huR6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Software Engineering
                            <span> - Fullstack Academy, Chicago, IL</span>
                          </a>{" "}
                          2021
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
