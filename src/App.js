import React from 'react';
import BannerImage from'./components/BannerImage';
import PhotoEntry from './components/PhotoEntry';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
          <h1>Welcome to My Photojournal</h1>
          <h3>Dung Hoang</h3>
          <PhotoEntry src="berlin.jpg" caption="The Heart of Europe" location="Berlin, Germany"/>
        </div>
      </header>
    </div>
  );
}

export default App;
