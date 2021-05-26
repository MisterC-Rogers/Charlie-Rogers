import { useState } from "react";
import contactStyles from '../styles/Contact.module.css'

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);
  const [hideForm, setHideForm] = useState(false);

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (mobileno) => {
    return /^[6-9]\d{9}$/.test(mobileno);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is required field.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "mobile") {
        if (!isValidMobile(value)) return "Invalid Mobile Number.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHideForm(true);
    for (let key in contactData) {
      if (!contactData[key]) {
        setHideForm(false);
        setSuccessMsg(false);
      }
    }
    if (hideForm === true) {
      setSuccessMsg(true);
    }
  };

  return (
      <div className={contactStyles.contact_container}>
        <form
          className={contactStyles.form}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          {!successMsg ? (
            <>
              <div id="errormessage" className={errorMsg ? contactStyles.errormessage : ""}>
                {errorMsg}
              </div>
              <div className={contactStyles.form_group}>
                <input
                  name="name"
                  type="text"
                  className={contactStyles.form_control}
                  placeholder="Name"
                  value={contactData.name || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className={contactStyles.form_group}>
                <input
                  name="mobile"
                  type="text"
                  className={contactStyles.form_control}
                  placeholder="Mobile"
                  onBlur={handleBlur}
                  value={contactData.mobile || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={contactStyles.form_group}>
                <input
                  name="company"
                  type="text"
                  className={contactStyles.form_control}
                  placeholder="Company"
                  value={contactData.company || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className={contactStyles.form_group}>
                <input
                  name="email"
                  type="email"
                  className={contactStyles.form_control}
                  placeholder="Email"
                  value={contactData.email || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className={contactStyles.form_group}>
                <textarea
                  name="message"
                  type="text"
                  className={contactStyles.form_control_message}
                  placeholder="Message"
                  value={contactData.message || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  rows="15"
                />
              </div>
              <p className={contactStyles.btn_container}>
                <input
                  type="submit"
                  className={contactStyles.btn}
                  value="Submit Now"
                />
              </p>
            </>
          ) : (
            <div className={ contactStyles.sendmessage} id="sendmessage">
              Thank for your message. We will contact you soon.
            </div>
          )}
        </form>
    </div>
  );
};

export default Contact;
