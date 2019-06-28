import React from 'react';
import "../../../css/search.scss"
import { SearchBar,} from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '搜帖子/搜用户/搜商家',
    };
  }


  render() {
    return (
      <div>
        <SearchBar
        placeholder="手动获取获取光标"
        ref={ref => this.manualFocusInst = ref}
      />
      </div>
    )
  }
}

export default App;