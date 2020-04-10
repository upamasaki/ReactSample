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


import PageHome from './pages/Home.js';
import PageOne from './pages/PageOne.js';
import PageTwo from './pages/PageTwo.js';
import UploadVehicle from './pages/UploadVehicle'


class App extends React.Component {
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
                <Route path="/PageHome"  component={PageHome} />
                <Route path="/UploadVehicle"  component={UploadVehicle} />
                </div>
            </BrowserRouter>
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

export default App;