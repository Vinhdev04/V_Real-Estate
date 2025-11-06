// src/components/ContactInfoCard.jsx
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/ContactInfoCard.css';

const iconMap = {
  location: MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
};

function ContactInfoCard({ icon, title, content, delay }) {
  const Icon = iconMap[icon];

  return (
    <div className="info-card" style={{ animationDelay: `${delay}s` }}>
      <div className="icon-circle">
        <Icon size={28} strokeWidth={2} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-content" dangerouslySetInnerHTML={{ __html: content.replace('\n', '<br />') }} />
    </div>
  );
}

export default ContactInfoCard;