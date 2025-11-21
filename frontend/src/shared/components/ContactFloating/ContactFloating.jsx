import "./ContactFloating.css"
function ContactFloating() {
  // Custom contact cho page đặc biệt
  const customContacts = {
    phone: '0987654321',
    zalo: '0987654321',
    facebook: 'https://facebook.com/specialpage',
    email: 'special@radanhadat.vn'
  };

  return (
    <div>
      <h1>Special Page</h1>
      <ContactFloating contacts={customContacts} />
    </div>
  );
}
export default ContactFloating;