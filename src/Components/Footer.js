import { Link } from "react-router-dom";
import AboutUs from "./ContactUs";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start ">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">
          <div class=" ms-5 ">
            <span>More about us</span>
          </div>
          <div class=" me-5 ">
            <a href="" class="me-4  text-reset">
              <i class="bi bi-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-whatsapp"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="bi bi-twitter"></i>
            </a>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row mt-3">
              <div class="text-center mb-5">
                <br></br>
                <br></br>
                <br></br>
                <h6 id="logo1">
                  <i class="fas fa-gem me-3 "></i>APP NAME
                </h6>
                <p>An oppurtunity of a lifetime.</p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 id="col" class="text-uppercase fw-bold mb-4">
                  Products
                </h6>

                <Link
                  to="/AboutUs"
                  style={{ textDecoration: "none", color: "darkgray" }}
                >
                  <p>
                    {" "}
                    <i class="bi bi-info-circle"></i> About Us
                  </p>
                </Link>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 id="col" class="text-uppercase fw-bold ms-3 mb-4">
                  Contact here.
                </h6>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  <a
                    href="https://APP.com/"
                    style={{ textDecoration: "none", color: "darkgray" }}
                  >
                    {" "}
                    app.com
                  </a>
                </p>
                <p>
                  <i class="fas fa-home me-3"></i> Lahore, 54000, Pakistan
                </p>
                <p>
                  <i class="bi bi-phone ms-3"></i> + 92 322 489 89
                </p>
                <p>
                  <i class="fas fa-home me-3"></i> Karachi, 54000, Pakistan
                </p>
                <p>
                  <i class="bi bi-phone ms-3"></i> + 01 312 489 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default Footer;
