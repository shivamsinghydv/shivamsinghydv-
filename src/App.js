import './App.css'
import './bootstrap.css'

const firebaseConfig = {
  apiKey: "AIzaSyCiNEYcwoVNz61TvwzPDsytPr9SfLrskVA",
  authDomain: "portfolio-12566.firebaseapp.com",
  projectId: "portfolio-12566",
  storageBucket: "portfolio-12566.appspot.com",
  messagingSenderId: "631106730850",
  appId: "1:631106730850:web:417d3824d153dd6af14a3b",
  measurementId: "G-7H5DP5LT0J"
};

function App() {
  const intro = "HI, I'm Shivam Singh. I'm a Full Stack Web Developer. I'm currently working on my portfolio."
  return (
    <div className="App">
      {themeChanger()}
      {landingPage(intro)}
      {footer()}
      {copyrights()}
    </div>
  );
}
function themeChanger(){
  return (
    <div className="theme-button top-0 end-0">
        <div className="switch">
          <div className="flicker"></div>
          <div className="moon"></div>
        </div>
    </div>
  );
}

function landingPage(textToWrite){
  return (
    <div className="container-fluid masthead text-center justify-content-between min-vh-100 bg-warning" id="welcome">
    <img height='300px' className='masthead-avatar pb-5 mt-5 text-center' src="https://www.shivamsinghydv.cf/assets/avatar.svg" alt="avatar" />
      <h2>{textToWrite}</h2>
      <br/>
      {/* <div className=" flex-wrap align-items-center"> */}
      {/* <label className="dropdown" style="margin-right: 1.5rem;">
        <div className="dd-button">
          Certifications &nbsp;  
        </div>
        <input type="checkbox" className="dd-input" id="test" />
        <ul className="dropdown-menu">
          <li className="dropdown-item"><a href="https://www.freecodecamp.org/certification/shivamsinghydv/responsive-web-design">Responsive web-design</a></li>
          <li className="divider"></li>
          <li className="dropdown-item"><a href="https://www.freecodecamp.org/certification/shivamsinghydv/javascript-algorithms-and-data-structures">JS DS & Algo</a></li>
        </ul>
      </label> */}
        {/* <button id="target" className=" btn btn-outline-primary contact-link"><a style="height: 1.8 */}
          {/* rem; font-size: 1.3rem;text-decoration: none;" className="contact-link" href="contact.html">Drop a message!</a></button>  */}
    {/* </div> */}
</div>
  )
}
function showcase(){
  const qrcodedesc = ''
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center d-flex">
        <div className="card mb-5 " style="width: 18rem;">
          <img className="card-img-top" src="assets/chatbot.webp" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">AI Chatbot</h5>
            <p className="card-text">An AI model that is created using <a target="_blank" href="https://www.python.org/">python3</a> and is trained using some given data then uses it to chat to humans.  <br /></p>
            <a target="_blank" href="https://github.com/shivamsinghydv/chatbot" className="btn btn-outline-info">codebase</a>
          </div>
        </div>
        <div className="card mb-5" style="width: 18rem;">
          <img className="card-img-top" src="assets/qrcode.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">QRcode generator</h5>
            <p className="card-text">A python3 script that takes a string as a parameter and converts it to qrcode. <br /><br /></p>
            <a target="_blank" href="https://github.com/shivamsinghydv/qr_code-generator" className="btn btn-outline-info">codebase</a>
    </div>
    </div>
    <div className="card  mb-5" style="width: 18rem;">
      <img className="card-img-top" src="assets/spiral.webp" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Spiral</h5>
        <p className="card-text">A <a target="_blank" href="https://www.python.org/">python3</a> script that when run creates a visual spiral with turtle . <br /> <br /></p>
        <a target="_blank" href="https://github.com/shivamsinghydv/spiral.py" className="btn btn-outline-info">codebase</a>
      </div>
      </div>
    </div>
    <div className="card  mb-5" style="width: 18rem;">
      <div className="h-75">
        <img className="card-img-top" style="padding-top: 3rem;" src="assets/1500x500.jpeg" alt="Card image cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Twitter-header-updater</h5>
        <p className="card-text">A <a target="_blank" href="https://www.python.org/">python3</a> script that refreshes my twitter header at runtime. <br /> <br /></p>
        <a target="_blank" href="https://github.com/shivamsinghydv/twitter-header" className="btn btn-outline-info">codebase</a>
      </div>
    </div>
  </div>
  )
}

const footer=()=>{
  return (
    <div className="footer">
      <footer className="footer text-center">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                  <h4 className="text-uppercase mb-4">Location</h4>
                  <p className="lead mb-0">
                      844101, Bihar,
                      <br />
                      India
                  </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                  <h4 className="text-uppercase mb-4">Around the Web</h4>
                  <a className="btn btn-outline-light btn-social mx-1" href="https://www.github.com/shivamsinghydv"><i className="fab fa-fw fa-github"></i></a>
                  <a className="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/shivamsinghydv"><i className="fab fa-fw fa-twitter"></i></a>
                  <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/shivamsinghydv"><i className="fab fa-fw fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/shivxmsinghydv"><i className="fab fa-fw fa-instagram"></i></a>
              </div>
          </div>
      </div>
  </footer> 
    </div>
  )
}
function copyrights(){
  <div className="copyright py-4 text-center bg-primary">
    <div className="container"><small>Copyright © Shivam Singh 2022</small></div>
  </div>
}



export default App;
