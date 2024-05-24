import EventHome from '../../assets/img/eventHome.jpg'

function Section2() {
  return `
<section class="home section" id="home">
        <div class="home__container container">
          <div class="home__content">
            <div class="home__data">
              <h3 class="home__subtitle">Welcome to the <span>Best</span></h3>
              <h1 class="home__title">Event Management Platform</h1>
              <p class="home__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt veniam vel odit voluptatibus nostrum unde voluptatem repellat. Magnam illo nam, animi culpa inventore quos dolorum natus. Libero, repudiandae optio!
              </p>
              <a style="--clr: #7808d0" class="button" href="#">
            <span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
           ABOUT US
        </a>
              </div>
            </div>
        <div class="home__image">
            <img src="${EventHome}" alt="" />
          </div>
          </div>
  
        </div>
      </section>
  `;
}

export default Section2;
