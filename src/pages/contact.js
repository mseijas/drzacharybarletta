import React from 'react';

const Contact = () => (
  <>
    <section id="contact" className="wrapper style-base fullscreen fade-up">
      <div className="inner">
        <h2>Contact</h2>
        <p>
          If you may be interested in working together, please reach out to me
          by email or phone. If calling, please leave a voicemail with your full
          name, a good call back number, and a few days & times that I might be
          able to reach you.
        </p>
        <div className="split">
          <section>
            {/* <div style={{}}> */}
            <iframe
              style={{ height: '100%', width: '100%', flex: 1 }}
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=928%20Broadway%2C%20Suite%20904%2C%20New%20York%20NY%2010010&key=AIzaSyCK1DN98FmOF5UBMeFsNM0ldIF1ZXDg8Ww"
            ></iframe>
            {/* </div> */}
          </section>
          <section className="split-right">
            <ul className="contact">
              <li>
                <h3>Address</h3>
                <span>
                  928 Broadway
                  <br />
                  Suite 904, Office 2
                  <br />
                  New York, NY 10010
                </span>
              </li>
              <li>
                <h3>Email</h3>
                <a href="mailto:zyb@drzacharybarletta.com">
                  zyb@drzacharybarletta.com
                </a>
              </li>
              <li>
                <h3>Phone</h3>
                <a href="tel:516-398-0297">(516) 398-0297</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
