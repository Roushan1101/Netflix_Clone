import './App.css';
import Row from './components/Row'
import React from 'react';
import requests from './request'
import Banner from './Banner'
import Nav from './Navbar'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
     <Row 
     isLargeRow={true}
     title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
     </div>
  );
}

export default App;
