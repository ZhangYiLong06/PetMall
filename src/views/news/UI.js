import React from 'react';
import "@/css/news.scss"
class App extends React.Component{
  
  render () {
    return (
      <div className = "box">
        <header className = "news_header"></header>
        <div className = "content">消息内容
        </div>
      </div>
    )
  }
}

export default App;