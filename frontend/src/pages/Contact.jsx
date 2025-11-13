import React from 'react';
import ContactForm from '../features/Contact/components/ContactForm';
import BranchList from '../features/Contact/components/BranchList';
import BackToTop from '../shared/components/BackToTop/BackToTop';
import ContactHero from '../features/Contact/components/ContactHero';
import ContactInfoSection from '../features/Contact/components/ContactInfoSection';

function index(props) {
    return (
        <div className="app-container">
            <ContactHero />
            <ContactInfoSection />
            <ContactForm />
            <BranchList />
            <BackToTop/>
        </div>
    );
}

export default index;