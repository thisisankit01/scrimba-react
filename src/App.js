import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <nav className="navbar">
        <img src={logo} className="App-logo" alt="logo" width={200} height={200} />
   </nav>
   <header>
     <h1>Fun Facts About React</h1>
   </header>
   <div id='mainContent'>
    <ul>
      <li>was released in 2013</li>
      <li>was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers Thousands of enterprise Apps, including mobile apps</li>
    </ul>
   </div>
   </div>
  );
}

export default App;


/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */