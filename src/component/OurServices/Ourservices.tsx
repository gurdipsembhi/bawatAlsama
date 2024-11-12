import servicesData from '@/json/ourServices.json';
import style from './ourServices.module.css'
function Services() {
    console.log(servicesData)
  return (
    <div className={style.mainContainer}>
      <h1>Our Services</h1>
      {servicesData.services.map((service, index) => (
        <div key={index} className={style.innerContainer}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <a href="#">{service.link_text}</a>
        </div>
      ))}
    </div>
  );
}

export default Services;
