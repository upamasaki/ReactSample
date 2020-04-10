import React, {useState} from 'react';

// ページ遷移に必要
import { BrowserRouter, Route, Link  } from 'react-router-dom';


import App2 from '../App2';

const PageTwo = () => {
    return (
        <div>
            <Link to="/">
                <button>
                    show PageOne when you click this!!
                </button>
            </Link>
            <br />
            <Link to="/pagetwo">
                <button>
                    show PageTwo when you click this!!
                </button>
            </Link>
                <br />
                this page is two!!!
                <br />
                <br />
                <App2/>
        </div>
    );
};

export default PageTwo