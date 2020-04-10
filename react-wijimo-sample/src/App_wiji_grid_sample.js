//必須
import React, { Component } from 'react';

import 'wijmo/styles/wijmo.css';
import * as wjGrid from 'wijmo/wijmo.react.grid';
import 'wijmo/cultures/wijmo.culture.ja.js';

//Appクラス = Appコンポーネント(カスタムタグ)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: this.getData()
    };
  }

  getData() {
    var gridData = [
      { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
      { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
      { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
      { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 }
    ];
    return gridData;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <div>
          <wjGrid.FlexGrid itemsSource={this.state.data}> 
            <wjGrid.FlexGridColumn header="ID" binding="id" width={60}/>
            <wjGrid.FlexGridColumn header="商品名" binding="product" width={200}/>
            <wjGrid.FlexGridColumn header="受注日" binding="date" width={120}/>
            <wjGrid.FlexGridColumn header="金額" binding="amount" width={100}/>
          </wjGrid.FlexGrid>
        </div>
      </div>
    );
  }
}

//他の場所で読み込んで使えるようにexport
export default App;