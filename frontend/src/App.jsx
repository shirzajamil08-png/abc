import React from 'react'
import './App.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"



const App = () => {
    useEffect (() => {
    AOS.init({
      duration:800,
      once: true,
      easing:'ease-out'
    })
  },[])
  const [open, setOpen] = useState(false);
  const location = useLocation();


  const text = "Web Developer"
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingspeed = isDeleting ? 200 : 200;
    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplay(text.substring(0, index + 1));
        setIndex(prev => prev + 1)
      }
      else if (isDeleting && index > 0) {
        setDisplay(text.substring(0, index - 1))
        setIndex(prev => prev - 1)
      }
      else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      }
      else if (isDeleting && index === 0) {
        setTimeout(() => setIsDeleting(false), 500)
      }
    }, typingspeed);
    return () => clearTimeout(timeout)
  }, [index, isDeleting, text]);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
    else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [location])
  // ---------portfolio-------------
  const [filtered, setFiltered] = useState("All Work");
  const portfolioItems = [
    {
      id: 1,
      category: "CREATIVE DESIGN",
      img: "/portfolio-1.webp",
      name: "Visual Identity System",
      tagone: "BRANDING",
      tagtwo: "IDENTITY",
      year: 2024,
      filter: "creative"
    },
    {
      id: 2,
      category: "DIGITAL EXPERIENCE",
      img: "/portfolio-2.webp",
      name: "Interactive Web Platform",
      tagone: "WEB DESIGN",
      tagtwo: "DEVELOPMENT",
      year: 2024,
      filter: "digital"
    },
    {
      id: 3,
      category: "BRAND STRATEGY",
      img: "/portfolio-3.webp",
      name: "Market Positioning",
      tagone: "STRATEGY",
      tagtwo: "CONSULTANT",
      year: 2023,
      filter: "strategy"
    },
    {
      id: 4,
      category: "Full Stack",
      img: "/portfolio-4.webp",
      name: "Custom Application",
      tagone: "REACT",
      tagtwo: "NODE.JS",
      year: 2024,
      filter: "development"
    },
    {
      id: 5,
      category: "ART DIRECTION",
      img: "/portfolio-5.webp",
      name: "Compaign Design",
      tagone: "CREATIVE",
      tagtwo: "COMPAIGN",
      year: 2024,
      filter: "creative"
    },
    {
      id: 6,
      category: "Digital Product",
      img: "/portfolio-6.webp",
      name: "Mobile Experience",
      tagone: "Mobile",
      tagtwo: "UI/UX",
      year: 2023,
      filter: "digital"
    },
  ];
  const filter = portfolioItems.filter((item) => {
    if (filtered === "All Work")
      return true;
    return item.filter.toLowerCase().includes(filtered.toLowerCase());
  });
  // ---------footer---------------
  const footerItems = [
    {
      id: 1,
      heading: "Useful Links",
      first: "Home",
      second: "About us",
      third: "Services",
      forth: "Terms of Service",
      fifth: "Privacy policy",
    },
    {
      id: 2,
      heading: "Our Services",
      first: "Web Design",
      second: "Web Development",
      third: "Product Management",
      forth: "Marketing",
      fifth: "Graphic Design",
    },
    {
      id: 1,
      heading: "Contact Us",
      first: "A108 Adam Street",
      second: "New York, NY 535022",
      third: "United States",
    },

  ]
  return (
    <>
      <header>
        <div className="logo">
          <img src="./logo.png" />
        </div>
        <nav>
          <ul className='nav-bar'>
            <li><NavLink to="/#home" end >Home</NavLink></li>
            <li><NavLink to="/#about" >About</NavLink></li>
            <li><NavLink to="/#resume">Resume</NavLink></li>
            <li><NavLink to="/#portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/#contact">Contact</NavLink></li>
            <button><Link to="/About">Get Started</Link></button>
          </ul>
        </nav>
        <div className="buttons">
          <button><Link to="">Get Started</Link></button>
          <i className={open ? "bi bi-x" : "bi bi-list"} onClick={() => { setOpen(!open) }}></i>
          {open && (
            <ul className='responsive'>
              <li><NavLink to="/#home" end >Home</NavLink></li>
              <li><NavLink to="/#about">About</NavLink></li>
              <li><NavLink to="/#resume">Resume</NavLink></li>
              <li><NavLink to="/#portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/#contact">Contact</NavLink></li>
            </ul>
          )}
        </div>
      </header>

      <section id="home">
        <div className="name" data-aos='fade-up'>
          <h2>Hi, I'm Shirza Jamil</h2>
          <p>I'm a &nbsp;
            <span>{display}</span>
            <span className='cursor'>|</span>
          </p>
          <div className="social-links">
            <a href="https://x.com/" target='blank'><i className='bi bi-twitter'></i></a>
            <a href="https://www.facebook.com/" target='blank'><i className='bi bi-facebook'></i></a>
            <a href="https://www.google.com/" target='blank'><i className='bi bi-google'></i></a>
            <a href="https://www.linkedin.com/" target='blank'><i className='bi bi-linkedin'></i></a>
          </div>
        </div>
        {/* --------about section---------- */}
      </section>
      <section id="about" data-aos='fade-up'>
        <div className="aboutme">
          <span>ABOUT ME</span>
          <h2>About Me</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
        </div>
        <div className="profile">
          <div className="left" data-aos='zoom-in'>
            <img src="/profile.png" />
            <div className="status"></div>
            <h3>Shirza Jamil</h3>
            <div className="role">Mern Stack Developer</div>
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <span>4.8</span>
            </div>
            <div className="stats">
              <div className="stat-item">
                <h4>156</h4>
                <p>PROJECTS</p>
              </div>
              <div className="stat-item">
                <h4>8+</h4>
                <p>Years</p>
              </div>
              <div className="stat-item">
                <h4>42</h4>
                <p>Awards</p>
              </div>
            </div>
            <button className="btn-primary download">
              <i className="bi bi-download"></i>
              Download CV
            </button>
            <button className="btn-primary contact">
              <i className="bi bi-envelope"></i>
              Contact
            </button>
            <div className="social-links social-contact">
              <a href=""><i className="bi bi-linkedin"></i></a>
              <a href=""><i className="bi bi-github"></i></a>
              <a href=""><i className="bi bi-twitter"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="right" data-aos='fade-right'>
            <div className="bio-section">
              <div className="section-tag">ABOUT ME</div>
              <h2>Transforming Ideas into Digital Reality</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            </div>
            <div className="details">
              <div className="detail-item" data-aos='fade-up'>
                <i className="bi bi-briefcase"></i>
                <div className="detail-content">
                  <span>EXPERIENCE &nbsp;</span>
                  <strong>8+ YEARS</strong>
                </div>
              </div>
              <div className="detail-item"  data-aos='fade-up'>
                <i className="bi bi-mortarboard"></i>
                <div className="detail-content">
                  <span>DEGREE &nbsp;</span>
                  <strong>Bachleor in Computer Science</strong>
                </div>
              </div>
              <div className="detail-item"  data-aos='fade-up'>
                <i className="bi bi-geo-alt"></i>
                <div className="detail-content">
                  <span>BASED IN &nbsp;</span>
                  <strong>FSD, Pakistan</strong>
                </div>
              </div>
              <div className="detail-item" data-aos='fade-up'>
                <i className="bi bi-envelope"></i>
                <div className="detail-content">
                  <span>EMAIL &nbsp;</span>
                  <strong>abc@gmail.com</strong>
                </div>
              </div>
              <div className="detail-item" data-aos='fade-up'>
                <i className="bi bi-phone"></i>
                <div className="detail-content">
                  <span>PHONE &nbsp;</span>
                  <strong>+92123456789</strong>
                </div>
              </div>
              <div className="detail-item" data-aos='fade-up'>
                <i className="bi bi-calendar-check"></i>
                <div className="detail-content">
                  <span>AVAILABILITY &nbsp;</span>
                  <strong>Open to Work</strong>
                </div>
              </div>
            </div>
            <div className="skills" data-aos='fade-up'>
              <div className="section-tag">CORE SKILLS</div>
              <h3>Technical Proficiency</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML</span>
                    <span className="skill-percent">95%</span>
                  </div>
                  <div className="progress">
                    <div id='ninety-five' className="progress-bar" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">CSS</span>
                    <span className="skill-percent">90%</span>
                  </div>
                  <div className="progress">
                    <div id='ninety' className="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-percent">85%</span>
                  </div>
                  <div className="progress">
                    <div id='eighty-five' className="progress-bar" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">React</span>
                    <span className="skill-percent">80%</span>
                  </div>
                  <div className="progress">
                    <div id='eighty' className="progress-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Express</span>
                    <span className="skill-percent">70%</span>
                  </div>
                  <div className="progress">
                    <div id='seventy-five' className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Node.js</span>
                    <span className="skill-percent">80%</span>
                  </div>
                  <div className="progress">
                    <div id='eighty-one' className="progress-bar" style={{ width: "81%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">MongoDB</span>
                    <span className="skill-percent">80%</span>
                  </div>
                  <div className="progress">
                    <div id='eighty-two' className="progress-bar" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Bootstrap</span>
                    <span className="skill-percent">90%</span>
                  </div>
                  <div className="progress">
                    <div id='ninety' className="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------resume section----------- */}
      <section id="resume">
        <div className="aboutme" data-aos='fade-up'>
          <span>RESUME</span>
          <h2>Resume</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
        </div>
        <div className="resume">
          <div className="experience" data-aos='fade-right'>
            <span>EXPERIENCE</span>
            <h2>Professional Journey</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="card" data-aos='fade-right'>
              <div className="card-header">
                <div className="logo">
                  <i className="bi bi-buildings"></i>
                </div>
                <div className="duration">CURRENT</div>
              </div>
              <div className="card-body">
                <h3>Senior Creative Director</h3>
                <p>Digital Innovation Labs</p>
                <div className="duration">2023-Present</div>
                <p className='description'>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
              </div>
            </div>
            <div className="card" data-aos='fade-right'>
              <div className="card-header">
                <div className="logo">
                  <i className="bi bi-laptop"></i>
                </div>
              </div>
              <div className="card-body">
                <h3>Product Design Lead</h3>
                <p>TechForward Solutions</p>
                <div className="duration">2022-2023</div>
                <p className='description'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
              </div>
            </div>
            <div className="card" data-aos='fade-right'>
              <div className="card-header">
                <div className="logo">
                  <i className="bi bi-palette"></i>
                </div>
              </div>
              <div className="card-body">
                <h3>UX Designer</h3>
                <p>Creative Studio Inc</p>
                <div className="duration">2017-2020</div>
                <p className='description'>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className="experience" data-aos='fade-left'>
            <span>EDUCATION</span>
            <h2>Academic Background</h2>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
            <div className="card time-line">
              <div className="marker">
                <i className="bi bi-mortarboard-fill"></i>
              </div>
              <div className="card-header">
                <div className="duration">2015-2017</div>
                <span className="degree">MASTERS</span>
              </div>
              <div className="card-body">
                <h3>Master of Design Innovation</h3>
                <p>Institute of Creative Arts</p>
                <div className="duration">2023-Present</div>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                <div className="achivements">
                  <i className="bi bi-award"></i>
                  <span>Summa Cum Laude</span>
                </div>
              </div>
            </div>
            <div className="card time-line">
              <div className="marker">
                <i className="bi bi-book"></i>
              </div>
              <div className="card-header">
                <div className="duration">2011-2015</div>
                <span className="degree">BACHELOR</span>
              </div>
              <div className="card-body">
                <h3>Bachelor of Fine Arts</h3>
                <p>Creative Arts University</p>
                <div className="duration">2023-Present</div>
                <p className='description'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div className="card time-line end">
              <div className="marker">
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <div className="card-header">
                <div className="duration">2016-2023</div>
                <span className="degree">CERTIFICATES</span>
              </div>
              <div className="card-body">
                <h3>Professional Certifications</h3>
                <p>Creative Arts University</p>
                <div className="duration">2023-Present</div>
                <div className="cert-item">
                  <div className="cert-name">Advanced UX Research</div>
                  <div className="cert-year">2023</div>
                </div>
                <div className="cert-item">
                  <div className="cert-name">Design Leadership</div>
                  <div className="cert-year">2022</div>
                </div>
                <div className="cert-item">
                  <div className="cert-name">Digital Strategy</div>
                  <div className="cert-year">2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------portfolio section--------- */}
      <section id="portfolio" data-aos='fade-up'>
        <div className="aboutme">
          <span>PORTFOLIO</span>
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
        </div>
        <div className="gallery" data-aos='fade-up'>
          <ul className="filters">
            <a tabIndex={0} onClick={() => setFiltered("All Work")}>All Work</a>
            <a tabIndex={0} onClick={() => setFiltered("Creative")}>Creative</a>
            <a tabIndex={0} onClick={() => setFiltered("Digital")}>Digital</a>
            <a tabIndex={0} onClick={() => setFiltered("Strategy")}>Strategy</a>
            <a tabIndex={0} onClick={() => setFiltered("Development")}>Development</a>
          </ul>
          <div className="filter-container">
            {filter.map((item) => (
              <div key={item.id} className="portfolio-card">
                <div className="image-container">
                  <img src={item.img} alt="" />
                  <div className="portfolio-overlay">
                    <span>{item.category}</span>
                    <h4>{item.name}</h4>
                  </div>
                </div>
                <div className="tags">
                  <div className="tag-item">
                    <span className="tag">{item.tagone}</span>
                    <span className="tag">{item.tagtwo}</span>
                  </div>
                  <div className="tag-year">{item.year}</div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* ----------contact section----------- */}
      <section id="contact" data-aos='fade-up'>
        <div className="aboutme">
          <span>CONTACT</span>
          <h2>Contact</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
          <div className="resume">
            <div className="contacts">
              <div className="address">
                <div className="contact-logo">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="information">
                  <h3>Address</h3>
                  <p>2847 Oak Street, San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="address">
                <div className="contact-logo">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="information">
                  <h3>Call Me</h3>
                  <p>+1 (555) 234-5678</p>
                </div>
              </div>
              <div className="address">
                <div className="contact-logo">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="information">
                  <h3>Email Me</h3>
                  <p>abc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="message">
              <form action="">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
                <input type="text" placeholder='Subject' />
                <textarea placeholder='Message' rows={6}></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ----------footer-------------------- */}
      <footer>
        <div className="footer">
          <div className="left-footer">
            <h2>Portfolio</h2>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="footer-social">
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
          <div className="right-footer">
            {footerItems.map((item) => (
              <ul key={item.id}>
                <h4>{item.heading}</h4>
                <li>{item.first}</li>
                <li>{item.second}</li>
                <li>{item.third}</li>
                <li>{item.forth}</li>
              </ul>

            ))}
          </div>
        </div>
        <div className="copyright">
          <p>Copyright <b>Portfolio</b> All Rights Reversed</p>
          <p>Designed by <span >BootstrapMade</span></p>
        </div>
      </footer>
    </>
  )
}

export default App
