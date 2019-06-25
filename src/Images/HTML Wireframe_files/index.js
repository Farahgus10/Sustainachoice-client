'use strict';
/* global $ */

const STORE = {
  startPage: true,
  projectPage: false,
};

function generateMainPageHTML(){
  return ` 
    <div id="main-page">
     <nav role="navigation" class="contact">
     <button class="js-contact-button" type="button">Contact me</button>
     <button class="js-projects-button" type="button">See projects</button>
     </nav>
     
      <section class="background-section parallax bg1">
      <header role="banner">
      <div class="parallax">
            <h1>Hello, </br>I'm Farah</h1>
        <div class="bio">
            <p>My name is Farah Gustafson, and I'm a web developer born and raised in Washington, D.C. I believe in collaborative work, big ideas, and open minds. </br></br>

            In addition to my love for coding, my passions include anything that involves the outdoors, yoga, and reading good books. You can often find me exploring the great outdoors with my dog. </p>
        </div>
        </div>
        </header>
      </section>

        <section class="description-section static">
          <h1>Boring</h1>
        </section>

        <section class="background-section parallax bg2">
            <div class="project project1">
               <h2>Sustainachoice</h2>
            </div>
        </section>
      </div>`;

  //     <div class="image-text">
  //     <div class="app-description">
  //       <h4>SustainaChoice</h4><br>
  //     </div>
  //     <div class="app-tech-stack">
  //       <p>Technical stack: ReactJs, Node, Express, PostgreSQL, CSS</p>
  //     </div>
  
  //   <div class="see-project"<a href="https://farah-sustainachoice-app.now.sh/">See project</a></div>
  //   <div class="see-code"><a href="Put link">See code</div>
  // </div>
}

function generateContactHTML(){
  return  `
    <div id="contact-page">
        <section class="left-pane">
            <button data-hover="Return to projects" class="return"><div> < </div></button>
           
            <div class="contact-header"><h1>Let's work together </h1></div>
        </section>

        <section class="right-pane">
            <div class="email"> 
                <p>Email me</p>
                <a class="email-link" href="mailto: farah.gustafson@gmail.com">farah.gustafson@gmail.com</a></div>
            <div class="linkedin">
              <p>Find me on Linkedin</p>
              <a class="linkedin-link" href="https://www.linkedin.com/in/farah-gustafson-824496132/">Linkedin</a></div>
            <div class=github>
              <p>Find me on GitHub</p>
              <a class="github-link" href="https://github.com/Farahgus10">GitHub</a></div>
        </section>
    </div>`;
}

function generateProjectsHTML(){
  return `
    <div id="projects-page">
      <button data-hover="Return to projects" class="return"><div> < </div></button>
      <header>
        <h1>My Projects</h1>
      </header>
      
      <div class="scrolling-wrapper">
        <div class="card card1"><h2>Card</h2>
          <div class="top-div">The Office Quiz</div>
          <div class="bottom-div">Technical stack: JS, HTML, CSS</div>
        </div>
        <div class="card card2"><h2>Card</h2>
          <div class="top-div">top</div>
          <div class="bottom-div">bottom</div>
        </div>
        <div class="card card3"><h2>Card</h2>
          <div class="top-div">top</div>
          <div class="bottom-div">bottom</div>
        </div>
      </div>
    </div>`
}

function renderPortfolio(){
  // if startPage is true, then load main page html
  if (STORE.startPage){
    $('.container').html(generateMainPageHTML());
  }
  // else (if start page is false) load contact page html
  else {
    $('.container').html(generateContactHTML());
  }

  if (STORE.projectPage){
    $('.container').html(generateProjectsHTML());
  }
}

function handleContactButton(){
  $('.container').on('click', '.js-contact-button', event => {
    event.preventDefault();

    STORE.startPage = !STORE.startPage;
    STORE.contactPage = true;
    renderPortfolio();
  });
}

function handleProjectsButton(){
  $('.container').on('click', '.js-projects-button', event => {
    event.preventDefault();
    console.log('hello');
    STORE.projectPage = true;
    renderPortfolio();
  });
}

function handleReturnButton(){
  $('.container').on('click', '.return', event => {
    STORE.startPage = true;
    STORE.contactPage = false;
    STORE.projectPage = false;

    renderPortfolio();
  });
}

// code for an interactive arrow - taking it off my page for now, but might return to this so I'm keeping the code commented out 
// $(function() {
//   setTimeout('topArrow()');
// });
  
// function topArrow() {
//   $('#topArrow').animate({
//     marginBottom: '-=15px'
//   }, 800).animate({
//     marginBottom: '+=15px'
//   }, 800);
//   setTimeout('topArrow()', 1600);
// }

function main(){
  renderPortfolio();
  handleContactButton();
  handleReturnButton();
  handleProjectsButton();
  //topArrow();
}

$(main);