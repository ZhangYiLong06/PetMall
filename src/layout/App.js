import React from 'react';
import { Switch, Route, Redirect, NavLink} from 'react-router-dom'
import Home from '@/views/home'
import Find from '@/views/find'
import Choose from '@/views/choose'
import User from '@/views/user'
import News from '@/views/news'
import Search from '@/views/home/search'
import "../main.scss"
const App = () => (
  <div className = "container">
  <div className = "container">
    <Switch>
      <Route path = '/home' component = { Home }/>
      <Route path = '/choose' component = { Choose }/>
      <Route path = '/find' component = { Find }/>
      <Route path = '/news' component = { News }/>
      <Route path = '/user' component = { User }/>
      <Route path = '/search' component = { Search }/>
      <Redirect to = '/home'/>
    </Switch>
  <footer className = "footer">
      <div className="footer-box">
        <ul>
        <NavLink to = "/home">
        <i></i>
          <p>首页</p>
        </NavLink>
        <NavLink to = "/choose">
        <i></i>
          <p>社区</p>
        </NavLink>
        <NavLink to = "/find">
        <i></i>
          <p>购宠</p>
        </NavLink>
        <NavLink to = "/news">
        <i></i>
          <p>消息</p>
        </NavLink>
        <NavLink to = "/user">
        <i></i>
          <p>我的</p>
        </NavLink>
        </ul>
      </div>
</footer>
</div>
</div>
)

export default App;