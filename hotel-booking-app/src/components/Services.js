import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Enjoy a complimentary welcome cocktail upon arrival to kickstart your stay with a refreshing treat."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Immerse yourself in nature with exhilarating hiking experiences right at our doorstep! ."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: " We offer complimentary shuttle services to and from the airport for your convenience, so you can travel with ease."
      },
      {
        icon: <FaBeer />,
        title: "Soft Drinks",
        info: " We offer a wide selection of non-alcoholic beverages to cater to all your needs"
      }

    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })} 
        </div>

      </section>
    );
  }
}
