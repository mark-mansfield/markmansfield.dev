import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ScrollAnimation from 'react-animate-on-scroll'
import { GridLoader } from 'react-spinners'
class Contact extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      emailSent: false,
      emailError: false,
      errorMessage: '',
      formVisible: true,
      loading: false,
    }

    this.notify = this.notify.bind(this)
  }
  // notify = msg => toast(msg)
  notify = statusCode => {
    if (statusCode === 1) {
      this.setState({ emailSent: true })
      this.setState({ loading: false })
    } else if (statusCode === 0) {
      this.setState({ loading: false })
      this.setState({
        error: true,
      })
    }
  }

  sendEmail(notifyFuncRef, data) {
    window.emailjs
      .send(
        'gmail',
        process.env.GATSBY_EMAILJS_TEMPLATEID,
        data,
        process.env.GATSBY_EMAILJS_USERID
      )
      .then(
        function(response) {
          notifyFuncRef(1)
        },
        function(error) {
          console.log(error)
          notifyFuncRef(0)
          // 'Oops something went wrong! \n I apologize for the inconvenience. \nPlease email me at mgm.webdeveloper@gmail.com',
        }
      )
  }

  render() {
    const flexRow = {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '2rem',
    }

    const flexCol = {
      display: 'flex',
      width: '100%',
      flexFlow: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '2rem',
    }

    return (
      <div className="container">
        <ToastContainer />
        <div style={flexRow}>
          <GridLoader
            sizeUnit={'px'}
            size={50}
            color={'#bfbfbf'}
            loading={this.state.loading}
          />
        </div>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={(values, { setSubmitting }) => {
            var templateParams = {
              reply_to: values.email,
              from_name: values.name,
              message_html: values.message,
            }
            this.setState({ loading: true, formVisible: false })
            this.sendEmail(this.notify, templateParams)
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Required'),
            email: Yup.string()
              .email()
              .required('Required'),
            message: Yup.string().required('Required'),
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props
            return (
              <div style={{ flexRow }}>
                {this.state.emailSent && (
                  <div>
                    <ScrollAnimation animateIn="fadeInUp" delay={100}>
                      <h1>
                        Your email is on its way! I look forward to discussing
                        any opportunities with you
                      </h1>
                    </ScrollAnimation>
                  </div>
                )}

                {this.state.error && (
                  <ScrollAnimation animateIn="fadeInUp" delay={100}>
                    <div style={flexCol}>
                      <span style={{ fontSize: '4rem' }}>Oops!</span>
                      <br />
                      <span style={flexCol}>
                        Something went wrong! <br />
                      </span>
                      <span style={{ fontSize: '16px' }}>
                        Please email me at <br />
                        mgm.webdeveloper [@] gmail.com
                      </span>
                      <span style={{ fontSize: '4rem' }}>Or</span>
                      contact me via linkedin.
                      <a
                        href="https://www.linkedin.com/in/mark-mansfield-20128837/?locale=en_US"
                        alt="contact mark here at his linkedin account"
                        title="mark's linkedin account"
                      >
                        <img
                          className="contact-layout-item-1"
                          width="200px"
                          src={require('../images/linkedin.svg')}
                          alt="linkedin link"
                          title="contact me on linkedin"
                        />
                      </a>
                    </div>
                  </ScrollAnimation>
                )}
                {this.state.formVisible && (
                  <form onSubmit={handleSubmit}>
                    <h1>
                      Get In touch with me here. I will get back to you ASAP
                    </h1>
                    <label htmlFor="name" style={{ display: 'block' }}>
                      Name
                    </label>

                    <input
                      id="name"
                      placeholder="Enter your name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.name && touched.name
                          ? 'text-input error'
                          : 'text-input'
                      }
                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )}
                    <label htmlFor="email" style={{ display: 'block' }}>
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="Enter your email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? 'text-input error'
                          : 'text-input'
                      }
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                    <label htmlFor="message" style={{ display: 'block' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      component="textarea"
                      placeholder="enter your enquiry"
                      type="text"
                      style={{ display: 'block' }}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.message && touched.message
                          ? 'text-input error'
                          : 'text-input'
                      }
                    />
                    {errors.message && touched.message && (
                      <div
                        className="input-feedback"
                        style={{ margin: '10px' }}
                      >
                        {errors.message}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={handleReset}
                      disabled={!dirty || isSubmitting}
                    >
                      Reset
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </form>
                )}
              </div>
            )
          }}
        </Formik>
      </div>
    )
  }
}

export default Contact
