import React from 'react'

const custom = () => {
  return (
    <div>
      <div className="container footer fixed-bottom">
        <div className="row">
          <div className="col-md-6">
            <p>Find me through.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              obcaecati qui ullam molestias quod corrupti a distinctio esse
              dolor nulla.
            </p>
          </div>
          <div className="col-md-6">
            <div
              style={{ color: "orange", textTransform: "uppercase" }}
              className="mb-3 fw-bold"
            >
              {" "}
              Contact Me!
            </div>
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-md-6">
                <label for="validationCustom01" className="form-label">
                  Full Names
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="eg. John Doe"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-6">
                <label for="validationCustom02" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="eg. example@gmail.com"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="col-md-6">
                <label for="validationCustom03" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom03"
                  placeholder="eg. +254712345678"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div class=" col-md-12">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="validationCustom04"
                  rows="3"
                  placeholder="Message here...."
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><img src="" alt=""/></li>
            <li class="ms-3"></li>
            <li class="ms-3"></li>
          </ul>
        </div>

        <ul className=" list-unstyled">
                  <li className=" resume-item">
                    Phone: <strong>+254791980616</strong>
                  </li>
                  <li className="resume-item">
                    Email: <strong>nicholaskiplimo5@gmail.com</strong>{" "}
                  </li>
                  <li className=" resume-item">
                    Qualification: <strong>Degree</strong>
                  </li>
                  <li className=" resume-item">
                    Specialization:
                    <strong>Software & System Applications</strong>
                  </li>
                </ul>
      </div>
    </div>
  )
}

export default custom