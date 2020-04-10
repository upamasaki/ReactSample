//import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './../App.css';
//
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as wjInput from '@grapecity/wijmo.react.input';
import { getData } from './../data';
//
class SelectClass extends React.Component {
    constructor(props) {
        super(props);
        this.data = getData();
        this.state = {
            showSelectAllCheckbox: true,
            showFilterInput: true,
            checkedItems: [],
        };
        this.onCheckedItemsChanged = this.onCheckedItemsChanged.bind(this);
        this.changeShowSelectAll = this.changeShowSelectAll.bind(this);
        this.changeShowFilterInput = this.changeShowFilterInput.bind(this);
    }
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-xs-5">
                    <div className="form-group">
                        <wjInput.MultiSelectListBox itemsSource={this.data} displayMemberPath="country" showSelectAllCheckbox={this.state.showSelectAllCheckbox} showFilterInput={this.state.showFilterInput} checkedItemsChanged={this.onCheckedItemsChanged}/>
                    </div>
        
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                        <label>
                            Search Class
                            <input type="checkbox" checked={this.state.showFilterInput} onChange={this.changeShowFilterInput}/>
                        </label>
                    </div>
                </div>
                <div className="col-xs-7">
                    <p>
                        <b>Ticked:</b>
                    </p>
                    <ul>
                        {this.state.checkedItems.map(this.renderCheckdItem)}
                    </ul>
                </div>
            </div>
        </div>;
    }
    renderCheckdItem(item, index) {
        return <li key={index}>{item.country}</li>;
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

export default SelectClass
