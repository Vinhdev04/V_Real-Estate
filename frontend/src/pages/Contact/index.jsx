import React from 'react';
import ContactForm from './features/ContactForm';
import BranchList from './features/BranchList';
import BackToTop from '../../shared/components/BackToTop/BackToTop';
import ContactHero from './features/ContactHero';
import ContactInfoSection from './features/ContactInfoSection';

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