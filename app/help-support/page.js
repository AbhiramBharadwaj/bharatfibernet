import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={1}>
      <Breadcrumb pageName="Help & Support" />
      
      <section className="service-details-section section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service-details-content">
                <h2>Help & Support</h2>
                <p>We're here to help you with any questions or concerns you may have.</p>
                
                <div className="mt-5">
                  <h3>Contact Us</h3>
                  <p>For immediate assistance, please reach out to our support team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default page;