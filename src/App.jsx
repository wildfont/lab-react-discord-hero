import './App.css';

function App() {

  return (
    <>
      <header>
        <img className= "discordLogo" src="src/assets/discord-logo-white.png" alt="" />
        <img className="menuIcon" src="src/assets/menu-icon.png" alt="" />
      </header>
      <body className='body'>
        <div className="mainText">
        <h1>IMAGINE A PLACE...</h1>
        <p>... where you can belong to a school club, a gaming group, or a worldwide community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
      </div>
      <button>Download from Mac</button>
      <br />
      <button className='openDiscord'>Open Discord in your browser</button>
      <img className="backgroundImg" src="src/assets/discord-background.png" alt="" />
      </body>
      
    </>
  )
}

export default App
