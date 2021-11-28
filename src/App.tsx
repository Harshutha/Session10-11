import React from 'react';
const list = [
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'VOOT',
    url: 'https://www.voot.com/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 0,
  },
];
function getTitle(){
  return "Hello React";
}

  function App() { return  (
      <div className= "container">
      <h1>{getTitle()}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      {
        list.map((item)=> (
          <div>
            <p>{item.title}</p>
            <p>{item.url}</p>
            <p>{item.author}</p>
            </div>
        ))
      }
      </div>
      
    ); }
export default App;
