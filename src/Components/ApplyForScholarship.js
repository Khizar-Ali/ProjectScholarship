import React from "react";
const ApplyForScholarship = () => {
  return (
    <div className="row mb-5">
      <div className="col-3"></div>
      <div
        className="col-6"
        style={{
          alignSelf: "center",
          backgroundColor: "rgb(216, 239, 247)",
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 10,
          borderWidth: 10,
          marginTop: "25px",
        }}
      >
        <h1 style={{ color: "white", marginRight: "20px", marginLeft: "20px" }}>
          Application Form For Scholarship
        </h1>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}>
          <div class="form-floating mb-3">
            <input
              style={{ height: "80px" }}
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="FirstName"
              required
            />
            <label for="floatingInput">First Name</label>
            <label
              style={{ fontSize: 10, marginTop: "18px", color: "red" }}
              for="floatingInput"
            >
              *As per educational documents*
            </label>
          </div>
          <div class="form-floating mb-3">
            <input
              style={{ height: "80px" }}
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="LastName"
              required
            />
            <label for="floatingInput">Last Name</label>
            <label
              style={{ fontSize: 10, marginTop: "18px", color: "red" }}
              for="floatingInput"
            >
              *As per educational documents*
            </label>
          </div>
          <div class="form-floating mb-3">
            <input
              style={{ height: "80px" }}
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Email address</label>
            <label
              style={{ fontSize: 10, marginTop: "18px", color: "red" }}
              for="floatingInput"
            >
              *As per educational documents*
            </label>
          </div>
          <div class="form-floating">
            <input
              style={{ height: "80px" }}
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <label>Preferred Method of Contact?</label>
          </div>
          <div class="form-check mt-5 ms-2">
            <input class="form-check-input" type="radio" name="Contact" />
            <label class="form-check-label" for="flexRadioDefault1">
              Email
            </label>
          </div>
          <div class="form-check mt-2 ms-2">
            <input class="form-check-input" type="radio" name="Contact" />
            <label class="form-check-label" for="flexRadioDefault2">
              Phone
            </label>
          </div>
          {/*} <div class="form-check mt-2 ms-2">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              value=""
              id="flexRadioDefault2"
              aria-label="Radio button for following text input"
              checked
            />
             <input type="text" class="form-control" aria-label="Text input with radio button"/>
    </div>*/}

          <div class="form-floating mt-3 mb-3">
            <input
              style={{ height: "80px" }}
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Contact"
              required
            />
            <label for="floatingInput">Phone Number</label>
          </div>
          <div class="form-floating mt-3 mb-3">
            <input
              style={{ height: "80px" }}
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Address"
              required
            />
            <label for="floatingInput">Address</label>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-floating mt-3 mb-3">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="City"
                  required
                />
                <label for="floatingInput">City</label>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-floating mt-3 mb-3">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="ZipCode"
                  required
                />
                <label for="floatingInput">ZIP Code</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div class="form-floating mt-3 mb-1">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Nationality"
                  required
                />
                <label for="floatingInput">Nationality</label>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-floating mt-3 mb-1">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Nationality"
                  required
                />
                <label for="floatingInput">Date of Birth</label>
                <label
                  style={{ fontSize: 10, marginTop: "18px", color: "red" }}
                  for="floatingInput"
                >
                  *Formmat: DD/MM/YYYY*
                </label>
              </div>
            </div>
            <div class="form-floating  ms-3">
              <label>Gender</label>
            </div>
            <div class="form-check mt-5 ms-4">
              <input class="form-check-input" type="radio" name="Gender" />
              <label class="form-check-label" for="Male">
                Male
              </label>
            </div>
            <div class="form-check mt-2 ms-4">
              <input class="form-check-input" type="radio" name="Gender" />
              <label class="form-check-label" for="Female">
                Female
              </label>
            </div>

            <div class="form-check mt-2 ms-4">
              <input class="form-check-input" type="radio" name="Gender" />
              <label class="form-check-label" for="Other">
                Other
              </label>
            </div>
            <div>
              <div class="form-floating mt-3 mb-3">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="id"
                  required
                />
                <label for="floatingInput">
                  Gov Issued ID # (not a professional issued ID)
                </label>
                <label
                  style={{ fontSize: 10, marginTop: "18px", color: "red" }}
                  for="floatingInput"
                >
                  *Incase of (Social Security Number) SSN or (Social
                  Identification Number) SIN - Kindly provide only last 4
                  digits.*
                </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="PreferedCity"
                  required
                />
                <label for="floatingInput">
                  {" "}
                  Any preferred Country or City where you like to study?
                </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="PreferredUniversity"
                  required
                />
                <label for="floatingInput">
                  Any preferred University or Institute you like to join?
                </label>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  borderWidth: 10,
                }}
              >
                <label
                  style={{
                    marginLeft: "16px",
                    marginBottom: "4px",
                    marginTop: "4px",
                  }}
                >
                  Select Program
                </label>
                <div class="form-check">
                  <input
                    type="checkbox"
                    name="AccountingandFinance"
                    value="AccountingandFinance"
                  />{" "}
                  Accounting and Finance
                  <br />
                  <input
                    type="checkbox"
                    name="AeronauticalEngineering"
                    value="AeronauticalEngineering"
                  />{" "}
                  Aeronautical Engineering
                  <br />
                  <input
                    type="checkbox"
                    name="Auditing"
                    value="Auditing"
                  />{" "}
                  Auditing
                  <br />
                  <input
                    type="checkbox"
                    name="Agriculture"
                    value="Agriculture"
                  />{" "}
                  Agriculture
                  <br />
                  <input
                    type="checkbox"
                    name="Astronomy"
                    value="Astronomy"
                  />{" "}
                  Astronomy
                  <br />
                  <input
                    type="checkbox"
                    name="ArchitectureandDesign"
                    value="ArchitectureandDesign"
                  />{" "}
                  Architecture and Design
                  <br />
                  <input type="checkbox" name="Art" value="Art" /> Art
                  <br />
                  <input
                    type="checkbox"
                    name="BankingandFinance"
                    value="BankingandFinance"
                  />{" "}
                  Banking and Finance
                  <br />
                  <input
                    type="checkbox"
                    name="BiomedicalEngineering"
                    value="BiomedicalEngineering"
                  />{" "}
                  Biomedical Engineering
                  <br />
                  <input type="checkbox" name="Botany" value="Botany" /> Botany
                  <br />
                  <input
                    type="checkbox"
                    name="BusinessAdministration"
                    value="BusinessAdministration"
                  />{" "}
                  Business Administration
                  <br />
                  <input
                    type="checkbox"
                    name="BusinessManagement"
                    value="BusinessManagement"
                  />{" "}
                  Business Management
                  <br />
                  <input
                    type="checkbox"
                    name="Communications"
                    value="Communications"
                  />{" "}
                  Communications
                  <br />
                  <input
                    type="checkbox"
                    name="Commerce"
                    value="Commerce"
                  />{" "}
                  Commerce
                  <br />
                  <input
                    type="checkbox"
                    name="ComputerSciences"
                    value="ComputerSciences"
                  />{" "}
                  Computer Sciences
                  <br />
                  <input
                    type="checkbox"
                    name="Engineering"
                    value="Engineering"
                  />{" "}
                  Engineering
                  <br />
                  <input
                    type="checkbox"
                    name="Entrepreneurship"
                    value="Entrepreneurship"
                  />{" "}
                  Entrepreneurship
                  <br />
                  <input
                    type="checkbox"
                    name="EnvironmentalStudies"
                    value="EnvironmentalStudies"
                  />{" "}
                  Environmental Studies
                  <br />
                  <input
                    type="checkbox"
                    name="FashionDesigning"
                    value="FashionDesigning"
                  />{" "}
                  Fashion Designing
                  <br />
                  <input
                    type="checkbox"
                    name="FoodSciences"
                    value="FoodSciences"
                  />{" "}
                  Food Sciences
                  <br />
                  <input type="checkbox" name="Geology" value="Geology" />{" "}
                  Geology
                  <br />
                  <input
                    type="checkbox"
                    name="Geograpgy"
                    value="Geograpgy"
                  />{" "}
                  Geograpgy
                  <br />
                  <input
                    type="checkbox"
                    name="GeneralManagement"
                    value="GeneralManagement"
                  />{" "}
                  General Management
                  <br />
                  <input
                    type="checkbox"
                    name="Genetics"
                    value="Genetics"
                  />{" "}
                  Genetics
                  <br />
                  <input
                    type="checkbox"
                    name="HealthSciences"
                    value="HealthSciences"
                  />{" "}
                  Health Sciences
                  <br />
                  <input
                    type="checkbox"
                    name="HRDevelopment"
                    value="HRDevelopment"
                  />{" "}
                  HR Development
                  <br />
                  <input
                    type="checkbox"
                    name="HRManagement"
                    value="HRManagement"
                  />{" "}
                  HR Management
                  <br />
                  <input
                    type="checkbox"
                    name="Humanities"
                    value="Humanities"
                  />{" "}
                  Humanities
                  <br />
                  <input
                    type="checkbox"
                    name="InformationTechnology"
                    value="InformationTechnology"
                  />{" "}
                  Information Technology
                  <br />
                  <input
                    type="checkbox"
                    name="InternationalRelations"
                    value="InternationalRelations"
                  />{" "}
                  International Relations
                  <br />
                  <input
                    type="checkbox"
                    name="Journalism"
                    value="Journalism"
                  />{" "}
                  Journalism
                  <br />
                  <input type="checkbox" name="Law" value="Law" /> Law
                  <br />
                  <input
                    type="checkbox"
                    name="LibrarySciences"
                    value="LibrarySciences"
                  />{" "}
                  Library Sciences
                  <br />
                  <input
                    type="checkbox"
                    name="Marketing"
                    value="Marketing"
                  />{" "}
                  Marketing
                  <br />
                  <input
                    type="checkbox"
                    name="ManagementSciences"
                    value="ManagementSciences"
                  />{" "}
                  Management Sciences
                  <br />
                  <input
                    type="checkbox"
                    name="MediaSciences"
                    value="MediaSciences"
                  />{" "}
                  Media Sciences
                  <br />
                  <input
                    type="checkbox"
                    name="Medicine"
                    value="Medicine"
                  />{" "}
                  Medicine
                  <br />
                  <input
                    type="checkbox"
                    name="Pharmacy"
                    value="Pharmacy"
                  />{" "}
                  Pharmacy
                  <br />
                  <input
                    type="checkbox"
                    name="PublicAdministration"
                    value="PublicAdministration"
                  />{" "}
                  Public Administration
                  <br />
                  <input
                    type="checkbox"
                    name="PublicFinance"
                    value="PublicFinance"
                  />{" "}
                  Public Finance
                  <br />
                  <input
                    type="checkbox"
                    name="ProjectManagement"
                    value="ProjectManagement"
                  />{" "}
                  Project Management
                  <br />
                  <input
                    type="checkbox"
                    name="SocialSciences"
                    value="SocialSciences"
                  />{" "}
                  Social Sciences
                  <br />
                  <input
                    type="checkbox"
                    name="SoftwareEngineering"
                    value="SoftwareEngineering"
                  />{" "}
                  Software Engineering
                  <br />
                  <input
                    type="checkbox"
                    name="SupplyChainManagement"
                    value="SupplyChainManagement"
                  />{" "}
                  Supply Chain Management
                  <br />
                  <input
                    type="checkbox"
                    name="TaxationandLaw"
                    value="TaxationandLaw"
                  />{" "}
                  Taxation and Law
                  <br />
                  <input
                    type="checkbox"
                    name="Technologies"
                    value="Technologies"
                  />{" "}
                  Technologies
                  <br />
                  <input type="checkbox" name="Tourism" value="Tourism" />{" "}
                  Tourism
                  <br />
                  <input type="checkbox" name="Zoology" value="Zoology" />{" "}
                  Zoology
                  <br />
                  <br />
                </div>
              </div>
              <div class="form-floating  ms-3">
                <label>SAT or GMAT</label>
              </div>
              <div class="form-check mt-5 ms-4">
                <input class="form-check-input" type="radio" name="test" />
                <label class="form-check-label" for="SAT">
                  SAT
                </label>
              </div>
              <div class="form-check mt-2 ms-4 mb-3">
                <input class="form-check-input" type="radio" name="test" />
                <label class="form-check-label" for="GMAT">
                  GMAT
                </label>
              </div>
              <div className="col">
              <div class="form-floating mt-3 mb-3">
                <input
                  style={{ height: "80px" }}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="City"
                  required
                />
                <label for="floatingInput">IELTS or GMAT score</label>
              </div></div>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  borderWidth: 10,
                  marginTop: "10px",
                }}
              >
                <label
                  style={{
                    marginLeft: "16px",
                    marginBottom: "4px",
                    marginTop: "4px",
                  }}
                >
                  English Proficiency
                </label>
                <div class="form-check">
                  <input type="checkbox" name="Beginner" value="Beginner" />{" "}
                  Beginner
                  <br />
                  <input
                    type="checkbox"
                    name="Intermediate"
                    value="Intermediate"
                  />{" "}
                  Intermediate
                  <br />
                  <input
                    type="checkbox"
                    name="Advanced"
                    value="Advanced"
                  />{" "}
                  Advanced
                  <br />
                  <input type="checkbox" name="Native" value="Native" /> Native
                  <br />
                  <input type="checkbox" name="ielts" value="ielts" /> IELTS
                  <br />
                  <input type="checkbox" name="tofel" value="tofel" /> TOEFL
                  <br /><be />
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6">
                  <div class="form-floating mt-3 mb-3">
                    <input
                      style={{ height: "80px" }}
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="HearedAboutUs"
                      required
                    />
                    <label for="floatingInput">
                      Where did you hear about us?
                    </label>
                    <label
                      style={{ fontSize: 10, marginTop: "18px" }}
                      for="floatingInput"
                    >
                      (e.g. website, internet search, word of mouth, Facebook
                      etc.)
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-floating mt-3 mb-3">
                    <input
                      style={{ height: "80px" }}
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Feedback"
                      required
                    />
                    <label for="floatingInput">
                      Any feedback you would like to share?
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
              <button type="button" class="btn btn-outline-info bg-light">Submit</button></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default ApplyForScholarship;
