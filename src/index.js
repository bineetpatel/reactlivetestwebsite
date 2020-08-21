import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {App,Apptwo} from './App';




ReactDom.render(
<React.Fragment>
<App />
<Apptwo />
</React.Fragment>
,document.getElementById("root")
);
