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

import App2 from './App2';

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
        <App2/>
    </div>
);
};

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