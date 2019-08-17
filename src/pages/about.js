import React from 'react';
import ZBarletta from '../assets/img/ZBarletta.jpg';

const About = () => (
  <>
    <section id="about" className="wrapper style-base fullscreen fade-up">
      <div className="inner">
        {/* <h2>About Me</h2> */}
        <p>
          <img
            src={ZBarletta}
            alt="Dr. Zachary Barletta"
            data-position="25% 25%"
            style={{
              height: '30em',
              marginBottom: '3em',
              float: 'left',
              marginRight: '2em',
            }}
          />
          I am licensed counseling psychologist and received my PhD from New
          York University (NYU) Steinhardt. In regards to my training, I
          completed my APA-accredited internship at Harvard Medical
          School/Cambridge Health Alliance where I received specialized training
          in how to work with people with complex trauma, substance use
          disorders, LGBTQ+ concerns, family conflict, relationship problems,
          depression, anxiety, and immigration stressors from
          psychodynamically-informed treatment approaches. I also completed a
          postdoctoral fellowship at NYU Counseling and Wellness Services where
          I worked with graduate and undergraduate students from a short-term
          psychodynamic approach. While in graduate school, I trained in a
          variety of settings as well, including: Pace University Counseling
          Center, the Addiction Institute of New York at Mount Sinai West
          Hospital (formerly Roosevelt Hospital), and Kings County Hospital.
        </p>
        <p>
          I also regularly serve as an adjunct instructor in NYU Steinhardt’s
          Department of Applied Psychology and teach masters-level courses to
          students in the mental health counseling and drama therapy programs. I
          graduated with a Bachelors of Science in human development from
          Cornell University.
        </p>
      </div>
    </section>
  </>
);

export default About;
