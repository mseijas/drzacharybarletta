import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About Me', href: 'about' },
        { content: 'Approach & Expertise', href: 'approach' },
        { content: 'Fees & Insurance', href: 'insurance' },
        { content: 'Contact', href: 'contact' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="sidebar">
        <div className="inner">
          <div className="logo">
            <div className="name">
              <p>Zachary</p>
              <p>Barletta, PhD</p>
            </div>
            <div className="dash" />
            <p className="title">Licensed Psychologist</p>
          </div>
          <nav>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <Scroll type="id" element={href}>
                      <a href={`#${href}`}>{content}</a>
                    </Scroll>
                  </li>
                );
              })}
            </Scrollspy>
          </nav>
        </div>
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#3dbeae',
            height: '34em',
            width: '34em',
            borderRadius: '100%',
            bottom: '-17em',
            right: '-17em',
            zIndex: '-100',
          }}
        ></div>
      </section>
    );
  }
}

export default Sidebar;
