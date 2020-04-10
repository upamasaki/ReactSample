//必須
import '@grapecity/wijmo.styles/wijmo.css';
import '@grapecity/wijmo.cultures/wijmo.culture.ja';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// wijimoに必要
import * as wjInput from '@grapecity/wijmo.react.input';
import { getData } from './data';

// ページ遷移に必要
import { BrowserRouter, Route, Link  } from 'react-router-dom';

const PageOne = () => {
    return (
      <div>
        PageOne
        <Link to="/pagetwo">
          <button>
            show PageTwo when you click this!!
          </button>
        </Link>
      </div>
    );  
};

const PageTwo = () => {
return (
    <div>
    PageTwo
    <Link to="/">
        <button>
        show PageOne when you click this!!
        </button>
    </Link>
    </div>
);
};

class App2 extends React.Component {
  constructor(props) {
      super(props);
      this.data = getData();
      this.state = {
          showSelectAllCheckbox: false,
          showFilterInput: false,
          checkedItems: []
      };
      this.onCheckedItemsChanged = this.onCheckedItemsChanged.bind(this);
      this.changeShowSelectAll = this.changeShowSelectAll.bind(this);
      this.changeShowFilterInput = this.changeShowFilterInput.bind(this);
  }
  render() {
      return <div className="container-fluid">
            <div>
            <BrowserRouter>
                <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo"  component={PageTwo} />
                </div>
            </BrowserRouter>
            </div>        
          <div className="row">
              <div className="col-xs-5">
                  <div className="form-group">
                      <wjInput.MultiSelect placeholder="国を選択" headerFormat="{count:n0}個の国" displayMemberPath="country" showSelectAllCheckbox={this.state.showSelectAllCheckbox} showFilterInput={this.state.showFilterInput} itemsSource={this.data} checkedItemsChanged={this.onCheckedItemsChanged}>
                      </wjInput.MultiSelect>
                  </div>
                  <div className="form-group">
                      <label>
                          「すべて選択」を表示
                          <input id="selectAll" type="checkbox" checked={this.state.showSelectAllCheckbox} onChange={this.changeShowSelectAll}/>
                      </label>
                  </div>
                  <div className="form-group">
                      <label>
                          「フィルター」を表示
                          <input id="filter" type="checkbox" checked={this.state.showFilterInput} onChange={this.changeShowFilterInput}/>
                      </label>
                  </div>
              </div>
              <div className="col-xs-7">
                  <p>
                      <b>チェックされた項目:</b>
                  </p>
                  <ul>
                      {this.state.checkedItems.map((item, index) => {
                                return <li key={index}>
                                                        {item.country}
                                                    </li>;
                            })}
                    </ul>
                </div>
            </div>
        </div>;
                        }
  onCheckedItemsChanged(sender) {
      this.setState({ checkedItems: sender.checkedItems });
  }
  changeShowSelectAll(event) {
      this.setState({ showSelectAllCheckbox: event.target.checked });
  }
  changeShowFilterInput(event) {
      this.setState({ showFilterInput: event.target.checked });
  }
}

export default App2;