import React, { useState } from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const SERVICE_ID = "service_4cqj92i";
    const TEMPLATE_ID = "template_j4a6mhj";
    const PUBLIC_KEY = "2IL-oNzcDlcasHxvK";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
    });

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#667eea",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again later.",
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#667eea",
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Get In Touch</h2>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>
            Ready to start your project? Let's talk!
          </p>
        </div>

        <div className={styles.contactContent}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and collaborations.
            </p>
            <div className={styles.contactItems}>
              {[
                {
                  icon: <EmailIcon />,
                  label: "Email",
                  value: "elenitade1221@gmail.com",
                },
                {
                  icon: <PhoneIcon />,
                  label: "Phone",
                  value: "+251 910 278 021",
                },
                {
                  icon: <LocationOnIcon />,
                  label: "Location",
                  value: "Adama, Ethiopia",
                },
              ].map((item, idx) => (
                <div className={styles.contactItem} key={idx}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading}
            >
              <SendIcon sx={{ marginRight: 1 }} />
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
