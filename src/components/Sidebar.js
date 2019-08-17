import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Welcome', href: 'intro' },
        { content: 'Who we are', href: 'one' },
        { content: 'What we do', href: 'two' },
        { content: 'Get in touch', href: 'three' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="sidebar">
        <div style={style.name}>
          <p>Zachary</p>
          <p>Barletta, PhD</p>
          <div>-</div>
          <p>Licensed Psychologist</p>
        </div>
        <div className="inner">
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
      </section>
    );
  }
}

const style = {
  name: {
    color: '#000',
    lineHeight: 0,
  },
};

export default Sidebar;
