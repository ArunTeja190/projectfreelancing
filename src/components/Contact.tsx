import type { FC } from 'react';

interface ContactProps {
  title: string;
  email: string;
  phone: string;
  address: string;
}

const Contact: FC<ContactProps> = ({ title, email, phone, address }) => {
  return (
    <section className="contact">
      <h2>{title}</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
    </section>
  );
};

export default Contact;
