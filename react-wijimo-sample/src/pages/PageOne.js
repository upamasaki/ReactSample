import React, {useState} from 'react';

import './../mysheet.css';

// ページ遷移に必要
import { BrowserRouter, Route, Link  } from 'react-router-dom';

const PageOne = () => {
    return (
      <div>
        <Link to="/">
          <button class="btn-flat-border">
            show PageOne when you click this!!
          </button>
        </Link>
        <br />
        <Link to="/pagetwo">
          <button class="btn-flat-border">
            show PageTwo when you click this!!
          </button>
        </Link>
        <br />
        <Link to="/PageHome">
        <button class="btn-flat-border">
          show PageHome when you click this!!
        </button>
        </Link>
        <Link to="/UploadVehicle">
        <button class="btn-flat-border">
          show UploadVehicle when you click this!!
        </button >
        </Link>
        <br />
        this page is PageHome!!!
        <br />
        <h3>Criate a file</h3>
      </div>
    );  
};

export default PageOne