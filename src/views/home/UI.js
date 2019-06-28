import React from 'react';
import { NavLink} from 'react-router-dom'
import "../../css/home.scss"
import Banner from '../../components/home/banner'

class App extends React.Component{

  componentDidMount () {
    this.props.getHomeBannerListData()
  }
  gosearch () {
    this.props.history.push('/search')
  }

  render () {
    console.log(this)
    return (
      <div className = "box">
        <header className = "header">
          <h3>首页</h3>
          <img className="home_top1" onClick= {this.gosearch.bind(this)} src="/assets/search.png"/>
        </header>
        <div className = "content">
          <Banner bannerlist = {this.props.homeBannerList}/>
          <div className="nav">
            <div className="nav-box">
              <ul className="home_ul_nav">
              <NavLink to = "/">
                <i></i>
                <p>附近</p>
              </NavLink>
              <NavLink to = "/">
                <i></i>
                <p>商城</p>
              </NavLink>
              <NavLink to = "/">
                <i></i>
                <p>宝宝热评</p>
              </NavLink>
              <NavLink to = "/">
                <i></i>
                <p>求助问答</p>
              </NavLink>
              </ul>
            </div>
          </div>
          <div className="claw">
            <img src="/assets/claw.png" alt=""/>
            <div className="claw-right">
              <h3>爪事件</h3>
              <p>萌宠逗趣欢乐多</p>
            </div>
          </div>
          <div className="buy">
            <ul className ="home_ul">
              <div className="buy-top">
                <h3>买狗狗</h3><p>放心交易、犬猫30天健康保障</p>
              </div>
              <li>
                <div className="buy-bottom">
                  <img src="/assets/dog1.png" alt="" />
                  <div className="buy-bottom-right">
                    <p>
                      <h4>黑色拉布拉多</h4>
                      拉布拉多寻回犬/黑色/MM
                    </p>
                    <b>2999元</b>
                  </div>
                </div>
              </li>
              <li>
                <div className="buy-bottom">
                  <img src="/assets/dog2.png" alt="" />
                  <div className="buy-bottom-right">
                    <p>
                      <h4>三通大围脖奶油柯基弟弟</h4>
                      柯基犬/DD
                    </p>
                    <b>6000元</b>
                  </div>
                </div>
              </li>
              <li>
                <div className="buy-bottom">
                  <img src="/assets/dog2.png" alt="" />
                  <div className="buy-bottom-right">
                    <p>
                      <h4>四通大围脖奶油柯基弟弟</h4>
                      柯基犬/DD
                    </p>
                    <b>6000元</b>
                  </div>
                </div>
              </li>
              <li>
                <div className="buy-bottom">
                  <img src="/assets/dog2.png" alt="" />
                  <div className="buy-bottom-right">
                    <p>
                      <h4>五通大围脖奶油柯基弟弟</h4>
                      柯基犬/DD
                    </p>
                    <b>6000元</b>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;