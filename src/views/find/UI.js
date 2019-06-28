import React from 'react';
import "@/css/find.scss";
class App extends React.Component{

  render () {
    return (
      <div className = "box">
        <header className = "header">
          <img className="find_top1" src="/assets/find_top1.png" alt="" />
          <a href="#">萌宠</a>
          <a className="twoa" href="#">宠舍</a>
        </header>
        <div className = "content">
          <div className="content_nav">
            <b>分类<i></i></b>
            <b>筛选<i></i></b>
          </div>
          <ul className="find_ul">
            <li>
              <img className="dogpng" src="/assets/find_dog.png" alt="" />
              <h4>泰迪</h4>
              <p>泰迪犬/DD/棕色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>5000</b>
                <i></i>
              </div>
            </li>
            <li>
              <img className="dogpng" src="/assets/find_dog2.png" alt="" />
              <h4>贵宾犬</h4>
              <p>贵宾犬/DD/白色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>3000</b>
                <i></i>
              </div>
            </li>
            <li>
              <img className="dogpng" src="/assets/find_dog3.png" alt="" />
              <h4>约克夏</h4>
              <p>约克夏/MM/白色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>8000</b>
                <i></i>
              </div>
            </li>
            <li>
              <img className="dogpng" src="/assets/find_dog4.png" alt="" />
              <h4>柯基犬</h4>
              <p>柯基犬/DD/黄色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>5500</b>
                <i></i>
              </div>
            </li>
            <li>
              <img className="dogpng" src="/assets/find_dog.png" alt="" />
              <h4>泰迪</h4>
              <p>泰迪犬/DD/棕色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>5000</b>
                <i></i>
              </div>
            </li>
            <li>
              <img className="dogpng" src="/assets/find_dog2.png" alt="" />
              <h4>贵宾犬</h4>
              <p>贵宾犬/DD/白色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>3000</b>
                <i></i>
              </div>
            </li>
            <li>
              <img className="dogpng" src="/assets/find_dog3.png" alt="" />
              <h4>约克夏</h4>
              <p>约克夏/MM/白色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>8000</b>
                <i></i>
              </div>
            </li>
            <li>
              <img className="dogpng" src="/assets/find_dog4.png" alt="" />
              <h4>柯基犬</h4>
              <p>柯基犬/DD/黄色</p>
              <div className="content_li_bottom">
                <img className="moneypng" src="/assets/find_money.png" alt="" />
                <b>5500</b>
                <i></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;