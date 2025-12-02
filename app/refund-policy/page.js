'use client';

import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

export default function RefundPolicy() {
  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Refund Policy" />

      {/* Hero Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h1 style={{ 
                  fontSize: '3rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#000'
                }}>
                  Refund Policy
                </h1>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  lineHeight: '1.8'
                }}>
                  Last Revised: November 27, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              {/* Introduction */}
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  At <strong>Bharat Fibernet</strong>, our goal is to provide fast, reliable, and uninterrupted internet connectivity.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  However, if a payment or service issue arises, we believe in fair and transparent handling of refund requests.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  This Refund Policy explains the situations in which a refund may be approved, how to apply for one, and what you can expect during the process.
                </p>
              </div>

              {/* Section 1 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  1. Purpose of This Policy
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  This Refund Policy is designed to:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Inform customers about the conditions under which a refund is applicable.</li>
                  <li>Set clear timelines for refund processing.</li>
                  <li>Ensure compliance with Indian consumer protection and digital payment regulations.</li>
                  <li>Build trust by maintaining complete transparency in billing and service transactions.</li>
                </ul>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  This policy applies to all Bharat Fibernet customers, including residential, SME, and enterprise users.
                </p>
              </div>

              {/* Section 2 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  2. General Rules
                </h2>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>All payments made for Bharat Fibernet services are final unless otherwise stated.</li>
                  <li>Refunds are only available in specific, verifiable circumstances as outlined below.</li>
                  <li>Refunds are processed only for payments made directly to Bharat Fibernet through official payment channels (website, app, authorized agent, or bank transfer).</li>
                  <li>Any refund request must be made within <strong>15 calendar days</strong> of the payment date.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  3. Eligible Scenarios for Refund
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  You may qualify for a refund under the following conditions:
                </p>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  3.1 Duplicate Payment
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you accidentally make two or more payments for the same transaction, we will verify the duplicate entries and refund the extra amount within 7–10 working days.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  3.2 Service Not Installed or Activated
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  If your broadband connection is not installed or activated within <strong>10 business days</strong> from the payment date, and the delay is not due to customer-related issues, you may be eligible for a full refund of the installation and subscription fee.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  Customer-related issues include:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                  <li>Wrong address or incomplete location details</li>
                  <li>Unavailability at the premises during scheduled installation</li>
                  <li>Pending permissions from housing societies or authorities</li>
                </ul>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  3.3 Service Not Feasible
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  In certain cases, technical or infrastructure limitations may prevent us from providing connectivity at your location. If such a situation arises, we will inform you promptly and issue a 100% refund for any amount collected in advance.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  3.4 Advance Payment Cancellations
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  If you decide to cancel your order before installation begins, you can request a partial refund. In such cases, administrative and processing fees (if any) may be deducted before refunding the balance.
                </p>
              </div>

              {/* Section 4 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  4. Non-Refundable Scenarios
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Refunds are not applicable under the following conditions:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Once the broadband connection is successfully installed and activated.</li>
                  <li>If the service has been used partially or fully during the billing cycle.</li>
                  <li>For temporary outages or slow speeds caused by maintenance, power failures, or local disruptions beyond our control.</li>
                  <li>For promotional, discounted, or bundled plans that specifically mention "non-refundable."</li>
                  <li>When the refund request is made after 15 days from the payment date.</li>
                  <li>When the issue arises due to customer-side equipment, such as router malfunction, wiring changes, or Wi-Fi configuration issues.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  5. Refund Amount and Deductions
                </h2>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>In cases where service installation has started or material has been dispatched, standard processing or material charges may be deducted.</li>
                  <li>If the refund relates to an advance payment for a cancelled plan, pro-rata deductions may apply based on the service usage period (if any).</li>
                  <li>GST or payment gateway transaction fees (if charged) are non-refundable, as they are processed by third parties.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  6. Refund Process and Timeline
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  All refund requests go through a verification and approval process by our Billing Department.
                </p>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  Step 1: Submit Request
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  Email your refund request to <a href="mailto:info@bharatvoip.com" style={{ color: '#28a745', textDecoration: 'none', fontWeight: '600' }}>info@bharatvoip.com</a> with the following details:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                  <li>Full Name</li>
                  <li>Registered Mobile Number</li>
                  <li>Transaction or Invoice Number</li>
                  <li>Payment Date and Mode</li>
                  <li>Reason for Refund Request</li>
                </ul>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  Step 2: Verification
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  Our billing team will review the request within 3–5 working days and may contact you for clarification or supporting documents.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  Step 3: Refund Approval
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If your request meets the eligibility criteria, you'll receive a confirmation email with the approved refund amount and estimated credit date.
                </p>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>
                  Step 4: Refund Processing
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  Approved refunds will be processed within 7–10 working days through the same mode of payment used originally. Refunds to credit/debit cards or UPI may take slightly longer depending on your bank's processing time.
                </p>
              </div>

              {/* Section 7 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  7. Offline or Cash Payments
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  If your payment was made through cash, cheque, or an offline agent, your refund will be issued via bank transfer (NEFT/IMPS) to the registered account holder after verification.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  You may be required to provide:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Bank Account Holder's Name</li>
                  <li>Account Number and IFSC Code</li>
                  <li>Payment Receipt or Invoice Copy</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  8. Refunds via Online Payment Gateways
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  For online transactions (UPI, credit/debit cards, net banking, wallets, etc.):
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>Refunds will be made to the same account or wallet used for payment.</li>
                  <li>Bharat Fibernet is not responsible for delays caused by banks or payment gateways during the refund process.</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  9. Dispute Resolution
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  If you disagree with the outcome of your refund request:
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#333', paddingLeft: '2rem' }}>
                  <li>You may escalate the issue by writing to <a href="mailto:info@bharatvoip.com" style={{ color: '#fd9330', textDecoration: 'none', fontWeight: '600' }}>info@bharatvoip.com</a> with the subject line "Refund Escalation."</li>
                  <li>Our escalation team will review the matter within 5–7 working days.</li>
                  <li>If unresolved, you may pursue resolution under applicable consumer protection laws in India.</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#28a745'
                }}>
                  10. Policy Updates
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Bharat Fibernet reserves the right to modify or update this Refund Policy at any time.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  All changes will be published on this page with an updated "Last Revised" date.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                  You are encouraged to review this policy periodically for the latest updates.
                </p>
              </div>

              {/* Section 11 */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  color: '#fd9330'
                }}>
                  11. Contact Information
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}>
                  If you have any questions or need assistance with a refund, please contact us:
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Email:</strong> <a href="mailto:info@bharatvoip.com" style={{ color: '#fd9330', textDecoration: 'none' }}>info@bharatvoip.com</a>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Customer Care:</strong> <a href="tel:+917799906341" style={{ color: '#fd9330', textDecoration: 'none' }}>+91 7799906341</a> / <a href="tel:04042027737" style={{ color: '#fd9330', textDecoration: 'none' }}>040-42027737</a>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0.5rem' }}>
                  <strong>Website:</strong> <a href="https://www.bharatfibernet.in" style={{ color: '#fd9330', textDecoration: 'none' }}>www.bharatfibernet.in</a>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '0' }}>
                  <strong>Corporate Office:</strong><br />
                  Jyothi Flora, 4th Floor, Kavuri Hills,<br />
                  Phase 2, Madhapur, Hyderabad, Telangana 500083
                </p>
              </div>

              {/* Note */}
              <div style={{
                background: '#f8f9fa',
                border: '2px solid #e0e0e0',
                borderRadius: '15px',
                padding: '2rem',
                marginBottom: '3rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#000' }}>
                  Note:
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: '1rem' }}>
                  Bharat Fibernet follows fair business practices in line with Indian consumer protection laws and <strong>The Digital Personal Data Protection Act, 2023</strong>.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', marginBottom: 0 }}>
                  All payment-related data is handled securely and confidentially.
                </p>
              </div>

              {/* Contact CTA */}
              <div style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                border: '2px solid #e0e0e0',
                borderRadius: '15px',
                padding: '3rem 2rem',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: '#000' }}>
                  Need Help with a Refund?
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                  Our billing team is here to assist you with any refund-related queries.
                </p>
                <a 
                  href="/contact"
                  style={{
                    display: 'inline-block',
                    padding: '0.875rem 2.5rem',
                    background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Contact Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
