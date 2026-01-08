import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Team Member" />
      <section className="about-team-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                About The Team
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Passionate &amp; Dedicated <br /> Team Member to delivering{" "}
                <br />
                exceptional results
              </h2>
            </div>
            <div className="text-items">
              <p className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                Which revolutionized our industry. This forward-thinking
                approach allowed us <br />
                to stay at the forefront of innovation and better serve
              </p>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                As technology evolved, so did we. In 1995, we embraced mention a
                significant <br /> technological advancement or change], which
                revolutionized our industry. <br /> This forward-thinking
                approach allowed us to stay at the forefront
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image">
                <img src="/assets/img/team/about-img-1.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="about-image">
                <img src="/assets/img/team/about-img-2.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section-3 section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Team Member
            </span>
            <h2>Meet Our Professional Team Members</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img
                    src="/assets/img/p3.jpg"
                    alt="team-img"
                    style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/BharatFiberNetHyd?rdid=j4wsBerLi992ZsX9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BjhF4jETM%2F#" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/bharatfibernet/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Poornachander Gaddam</Link>
                  </h4>
                  <p>Managing Director</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img
                    src="/assets/img/p2.jpg"
                    alt="team-img"
                    style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/BharatFiberNetHyd?rdid=j4wsBerLi992ZsX9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BjhF4jETM%2F#" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/bharatfibernet/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Gaddam Kishore</Link>
                  </h4>
                  <p>Director</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img
                    src="/assets/img/p1.jpg"
                    alt="team-img"
                    style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/BharatFiberNetHyd?rdid=j4wsBerLi992ZsX9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BjhF4jETM%2F#" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/bharatfibernet/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Botte Venugopal</Link>
                  </h4>
                  <p>Technical Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta sectionPadding />
      <section className="testimonial-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center mb-0">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We’ve 1250+ Global Clients Say Us
            </h2>
          </div>
          <div className="testimonial-wrapper pt-5">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial/testimonial.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
