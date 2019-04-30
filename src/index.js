import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import KrogerBookReview from './Components/KrogerBookReview';

ReactDOM.render(<Router><KrogerBookReview /></Router>, document.getElementById('root'));
