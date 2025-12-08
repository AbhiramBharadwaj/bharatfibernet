// components/layout/Footer.jsx
import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
    default:
      return <Footer1 />;
  }
};

export default Footer;

const Footer1 = () => {
  return (
    <footer
      className="footer-section footer-bg text-white"
      style={{
        background:
          "linear-gradient(180deg, #fffaf5 0%, #ffe3cf 45%, #f36a1d 100%)",
        color: "#0f172a",
      }}
    >
      <div className="container">
        {/* -------- TOP 3-COLUMN LAYOUT -------- */}
        <div className="footer-widgets-wrapper py-5">
          <div className="row justify-content-center">
            {/* Company + Menu */}
            <div className="col-12 col-lg-4 mb-5 text-center">
              <img
                src="assets/img/logo/logo.png"
                alt="Bharat FiberNet"
                style={{ height: "64px", marginBottom: "14px" }}
              />
              <ul
                className="list-unstyled mt-4"
                style={{
                  fontSize: "16px",
                  lineHeight: "34px",
                  textAlign: "center",
                  margin: "0 auto",
                  padding: 0,
                  color: "#0f172a",
                }}
              >
                <li>
                  <Link href="/about" style={{ color: "inherit", textDecoration: "none" }}>
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" style={{ color: "inherit", textDecoration: "none" }}>
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge" style={{ color: "inherit", textDecoration: "none" }}>
                    Knowledge
                  </Link>
                </li>
                <li style={{ color: "#6b7280" }}>Career</li>
                <li>
                  <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
                    Help &amp; Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>


            {/* Address Details */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="single-footer-widget d-flex flex-column align-items-center text-center"
                style={{
                  textAlign: "center",
                  color: "#0f172a",
                }}
              >
                <div className="widget-head">
                  <h4 style={{ color: "#0f172a", fontWeight: 700, fontSize: "18px" }}>
                    Address Details
                  </h4>
                </div>
                <p className="mb-0" style={{ color: "#4b5563", lineHeight: "1.7" }}>
                  Jyothi Flora, 4th Floor, Kavuri Hills,
                  <br />
                  Phase 2, Madhapur, Hyderabad,
                  <br />
                  Telangana 500033
                </p>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div
                className="single-footer-widget d-flex flex-column align-items-center text-center"
                style={{
                  textAlign: "center",
                  color: "#0f172a",
                }}
              >
                <div className="widget-head">
                  <h4 style={{ color: "#0f172a", fontWeight: 700, fontSize: "18px" }}>
                    Terms And Conditions
                  </h4>
                </div>
                <ul
                  className="list-items list-unstyled mb-0"
                  style={{ textAlign: "center", color: "#4b5563" }}
                >
                  <li className="mb-2">
                    <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/terms-of-service" style={{ color: "inherit", textDecoration: "none" }}>
                      Terms Of Services
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link href="/refund-policy" style={{ color: "inherit", textDecoration: "none" }}>
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* -------- HORIZONTAL DIVIDER -------- */}
        <hr className="my-0" style={{ borderColor: "rgba(15,23,42,0.12)" }} />

        {/* -------- BOTTOM SINGLE LINE -------- */}
        <div className="py-3 text-center">
          <p className="mb-0" style={{ color: "#4b5563" }}>
            <Link href="/about" style={{ color: "inherit", textDecoration: "none" }}>
              Who We Are
            </Link>{" "}
            |{" "}
            <Link href="/what-we-do" style={{ color: "inherit", textDecoration: "none" }}>
              What We Do
            </Link>{" "}
            |{" "}
            <Link href="/knowledge" style={{ color: "inherit", textDecoration: "none" }}>
              Knowledge
            </Link>{" "}
            | Career |{" "}
            <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
              Help &amp; support
            </Link>{" "}
            |{" "}
            <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
