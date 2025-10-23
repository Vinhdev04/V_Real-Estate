import React from 'react';
import  "./HomePage.css";

function HomePage() {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-badge">✨ Welcome to VaniizIT</span>
                        <h1 className="hero-title">
                            Build Your <span className="gradient-text">Digital Future</span> With Us
                        </h1>
                        <p className="hero-description">
                            Transform your ideas into reality with cutting-edge technology solutions. 
                            We deliver innovative software that drives business growth.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">
                                Get Started
                                <span className="btn-icon">→</span>
                            </button>
                            <button className="btn btn-secondary">
                                <span className="play-icon">▶</span>
                                Watch Demo
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3>98%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Team Members</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="floating-card card-1">
                            <div className="card-icon">💻</div>
                            <p>Web Development</p>
                        </div>
                        <div className="floating-card card-2">
                            <div className="card-icon">📱</div>
                            <p>Mobile Apps</p>
                        </div>
                        <div className="floating-card card-3">
                            <div className="card-icon">🚀</div>
                            <p>Cloud Solutions</p>
                        </div>
                        <div className="hero-circle"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="section-header">
                    <span className="section-badge">About Us</span>
                    <h2 className="section-title">Why Choose VaniizIT?</h2>
                    <p className="section-description">
                        We combine expertise, innovation, and dedication to deliver exceptional results
                    </p>
                </div>
                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            Empowering businesses through innovative technology solutions 
                            that drive growth and efficiency.
                        </p>
                    </div>
                    <div className="about-card">
                        <div className="about-icon">💡</div>
                        <h3>Innovation First</h3>
                        <p>
                            Staying ahead of technology trends to provide cutting-edge 
                            solutions for modern challenges.
                        </p>
                    </div>
                    <div className="about-card">
                        <div className="about-icon">🤝</div>
                        <h3>Client Partnership</h3>
                        <p>
                            Building long-term relationships based on trust, transparency, 
                            and mutual success.
                        </p>
                    </div>
                    <div className="about-card">
                        <div className="about-icon">⚡</div>
                        <h3>Fast Delivery</h3>
                        <p>
                            Agile methodology ensures rapid development without 
                            compromising quality or reliability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="section-header">
                    <span className="section-badge">Our Services</span>
                    <h2 className="section-title">What We Offer</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-number">01</div>
                        <h3>Web Development</h3>
                        <p>Custom websites and web applications built with modern frameworks</p>
                        <ul className="service-features">
                            <li>✓ Responsive Design</li>
                            <li>✓ Fast Performance</li>
                            <li>✓ SEO Optimized</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="service-number">02</div>
                        <h3>Mobile Apps</h3>
                        <p>Native and cross-platform mobile applications for iOS and Android</p>
                        <ul className="service-features">
                            <li>✓ User-Friendly UI/UX</li>
                            <li>✓ Offline Support</li>
                            <li>✓ Push Notifications</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="service-number">03</div>
                        <h3>Cloud Solutions</h3>
                        <p>Scalable cloud infrastructure and migration services</p>
                        <ul className="service-features">
                            <li>✓ AWS & Azure</li>
                            <li>✓ Auto Scaling</li>
                            <li>✓ 99.9% Uptime</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="service-number">04</div>
                        <h3>AI & Machine Learning</h3>
                        <p>Intelligent automation and data-driven insights</p>
                        <ul className="service-features">
                            <li>✓ Predictive Analytics</li>
                            <li>✓ Natural Language Processing</li>
                            <li>✓ Computer Vision</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <span className="section-badge">Get In Touch</span>
                        <h2 className="section-title">Let's Build Something Amazing</h2>
                        <p className="contact-description">
                            Have a project in mind? We'd love to hear about it. 
                            Get in touch and let's make it happen.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>hello@vaniizit.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+84 123 456 789</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" className="form-input" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" className="form-input" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" className="form-input" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">
                                Send Message
                                <span className="btn-icon">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Agent/Team Section */}
            <section id="agent" className="agent-section">
                <div className="section-header">
                    <span className="section-badge">Our Team</span>
                    <h2 className="section-title">Meet Our Experts</h2>
                </div>
                <div className="agent-grid">
                    <div className="agent-card">
                        <div className="agent-avatar">
                            <div className="avatar-placeholder">JD</div>
                        </div>
                        <h3>John Doe</h3>
                        <p className="agent-role">CEO & Founder</p>
                        <div className="agent-social">
                            <a href="#" className="social-link">in</a>
                            <a href="#" className="social-link">tw</a>
                            <a href="#" className="social-link">gh</a>
                        </div>
                    </div>
                    <div className="agent-card">
                        <div className="agent-avatar">
                            <div className="avatar-placeholder">JS</div>
                        </div>
                        <h3>Jane Smith</h3>
                        <p className="agent-role">Lead Developer</p>
                        <div className="agent-social">
                            <a href="#" className="social-link">in</a>
                            <a href="#" className="social-link">tw</a>
                            <a href="#" className="social-link">gh</a>
                        </div>
                    </div>
                    <div className="agent-card">
                        <div className="agent-avatar">
                            <div className="avatar-placeholder">MB</div>
                        </div>
                        <h3>Mike Brown</h3>
                        <p className="agent-role">UI/UX Designer</p>
                        <div className="agent-social">
                            <a href="#" className="social-link">in</a>
                            <a href="#" className="social-link">tw</a>
                            <a href="#" className="social-link">gh</a>
                        </div>
                    </div>
                    <div className="agent-card">
                        <div className="agent-avatar">
                            <div className="avatar-placeholder">SD</div>
                        </div>
                        <h3>Sarah Davis</h3>
                        <p className="agent-role">Project Manager</p>
                        <div className="agent-social">
                            <a href="#" className="social-link">in</a>
                            <a href="#" className="social-link">tw</a>
                            <a href="#" className="social-link">gh</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let's turn your vision into reality. Get in touch with us today!</p>
                    <button className="btn btn-light">
                        Start Your Journey
                        <span className="btn-icon">→</span>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;