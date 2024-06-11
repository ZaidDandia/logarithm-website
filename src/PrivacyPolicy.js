import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ParticleBackground from "./components/particles";
// import ReactFullpage from "@fullpage/react-fullpage-umd";
// import centro from "./images/Centro.png";
// import throwdown from "./images/ThaThrowdown.png";
// import vitpay from "./images/Vitpay.png";
import "./stylesheets/Privacy.scss";

const policyData = [];

const Privacy = () => {
  return (
    <>
      <section className="section__privacy">
        <div className="section__privacy--layout">
          <h2 className="section__privacy--head">Privacy policy</h2>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Introduction</h4>
            <div className="privacy__content--details">
              <p>
                Welcome to Logarithm Technologies. We value your privacy and are
                committed to protecting your personal data. This privacy policy
                explains how we collect, use, and safeguard your information
                when you visit our website and use our services.
              </p>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Who We Are</h4>
            <div className="privacy__content--details">
              <p>Logarithm Technologies</p>
              <p>Address: Shrewsbury, United Kingdom</p>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Data We Collect</h4>
            <div className="privacy__content--details">
              <p className="privacy__content--subheading">Personal Data</p>
              <p>
                When you use our services or browse our website, we may collect
                the following personal data:
              </p>
              <ul className="privacy__content--list">
                <li className="privacy__content--listItem">
                  Contact Information: Name, email address, phone number, postal
                  address.
                </li>
                <li className="privacy__content--listItem">
                  Account Information: Username, password, and other
                  security-related information.
                </li>
                <li className="privacy__content--listItem">
                  Billing Information: Credit card details, billing address.
                </li>
                <li className="privacy__content--listItem">
                  Usage Data: Details about your usage of our services,
                  including log data, IP address, browser type, and pages
                  visited.
                </li>
              </ul>
              <p className="privacy__content--subheading">Non-Personal Data</p>
              <p>
                We also collect non-personal data that cannot be used to
                identify you:
              </p>
              <ul className="privacy__content--list">
                <li className="privacy__content--listItem">
                  Device Information: Type of device, operating system, and
                  other technical details.
                </li>
                <li className="privacy__content--listItem">
                  Analytics Data: Website traffic patterns, user behavior, and
                  other aggregated data.
                </li>
              </ul>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">How We Collect Data</h4>
            <div className="privacy__content--details">
              <p>We collect data through various methods, including:</p>
              <ul className="privacy__content--list">
                <li className="privacy__content--listItem">
                  Direct Interactions: When you fill out forms on our website or
                  communicate with us.
                </li>
                <li className="privacy__content--listItem">
                  Automated Technologies: Through cookies, server logs, and
                  other similar technologies.
                </li>
                <li className="privacy__content--listItem">
                  Third-Party Sources: From third-party services that provide
                  additional data to enhance our records.
                </li>
              </ul>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">How We Use Your Data</h4>
            <div className="privacy__content--details">
              <p>We use the collected data for the following purposes:</p>
              <ul className="privacy__content--list">
                <li className="privacy__content--listItem">
                  Service Delivery: To provide and manage our SaaS offerings and
                  other products.
                </li>
                <li className="privacy__content--listItem">
                  Customer Support: To respond to your inquiries and provide
                  technical support.
                </li>
                <li className="privacy__content--listItem">
                  Billing and Payments: To process transactions and manage your
                  billing information.
                </li>
                <li className="privacy__content--listItem">
                  Marketing and Communication: To send promotional materials,
                  newsletters, and other updates.
                </li>
                <li className="privacy__content--listItem">
                  Improvement and Development: To enhance our services, develop
                  new features, and improve user experience.
                </li>
                <li className="privacy__content--listItem">
                  Compliance and Legal Obligations: To comply with legal
                  requirements and protect our rights and interests.
                </li>
              </ul>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Sharing Your Data</h4>
            <div className="privacy__content--details">
              <p>We may share your data with the following entities:</p>
              <ul className="privacy__content--list">
                <li className="privacy__content--listItem">
                  Service Providers: Third-party vendors who assist us in
                  providing our services.
                </li>
                <li className="privacy__content--listItem">
                  Affiliates and Partners: Trusted partners for joint marketing
                  initiatives.
                </li>
                <li className="privacy__content--listItem">
                  Legal Authorities: When required by law or to protect our
                  legal interests.
                </li>
              </ul>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Data Security</h4>
            <div className="privacy__content--details">
              <p>
                We implement robust security measures to protect your data,
                including:
              </p>
              <ul className="privacy__content--list">
                <li className="privacy__content--listItem">
                  Encryption: Use of encryption technologies to secure data
                  during transmission and storage.
                </li>
                <li className="privacy__content--listItem">
                  Access Controls: Restricted access to personal data to
                  authorized personnel only.
                </li>
                <li className="privacy__content--listItem">
                  Regular Audits: Periodic security assessments and audits to
                  identify and address vulnerabilities.
                </li>
              </ul>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Data Retention</h4>
            <div className="privacy__content--details">
              <p>
                We retain your data for as long as necessary to fulfill the
                purposes outlined in this privacy policy, unless a longer
                retention period is required or permitted by law.
              </p>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Your Rights</h4>
            <div className="privacy__content--details">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="privacy__content--list">
                <li className="privacy__content--listItem">
                  Access: Request access to the personal data we hold about you.
                </li>
                <li className="privacy__content--listItem">
                  Correction: Request correction of inaccurate or incomplete
                  data.
                </li>
                <li className="privacy__content--listItem">
                  Deletion: Request deletion of your personal data under certain
                  conditions.
                </li>
                <li className="privacy__content--listItem">
                  Objection: Object to the processing of your data for specific
                  purposes.
                </li>
                <li className="privacy__content--listItem">
                  Portability: Request the transfer of your data to another
                  service provider.
                </li>
              </ul>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">
              Cookies and Tracking Technologies
            </h4>
            <div className="privacy__content--details">
              <p>
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can manage your cookie
                preferences through your browser settings.
              </p>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">Third-Party Links</h4>
            <div className="privacy__content--details">
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these websites and
                encourage you to review their privacy policies.
              </p>
            </div>
          </div>
          <div className="privacy__content">
            <h4 className="privacy__content--head">
              Changes to This Privacy Policy
            </h4>
            <div className="privacy__content--details">
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any significant changes by posting the new policy
                on our website and updating the effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
