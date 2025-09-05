import type { FC } from 'react';

interface ContactProps {
  email: string;
  phone: string;
  address: string;
  website?: string;
}

const Contact: FC<ContactProps> = ({ email, phone, address, website }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-form-container">
          <h2>Write us</h2>
          <p className="contact-subtitle">We're open for any suggestion or just to have a chat</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows={4} required></textarea>
            </div>
            <button type="submit" className="send-message-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-container">
          <h3>Contact information</h3>
          <p className="info-subtitle">We're open for any suggestion or just to have a chat</p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-label">
                <span className="icon">📍</span>
                <strong>ADDRESS:</strong>
              </div>
              <p className="contact-value">{address}</p>
            </div>

            <div className="contact-detail-item">
              <div className="contact-label">
                <span className="icon">📞</span>
                <strong>PHONE:</strong>
              </div>
              <p className="contact-value">{phone}</p>
            </div>

            <div className="contact-detail-item">
              <div className="contact-label">
                <span className="icon">✉️</span>
                <strong>EMAIL:</strong>
              </div>
              <p className="contact-value">{email}</p>
            </div>

            {website && (
              <div className="contact-detail-item">
                <div className="contact-label">
                  <span className="icon">🌐</span>
                  <strong>WEBSITE:</strong>
                </div>
                <p className="contact-value">{website}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
