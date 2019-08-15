import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom'
import NavBar from './SignUpComponents/NavBar';
import SignUpForm from './SignUpComponents/SignUpForm';



it('renders without crashing',()=>{
  const div=document.createElement('div')
  ReactDOM.render(<MemoryRouter><NavBar/></MemoryRouter>,div);
  ReactDOM.unmountComponentAtNode(div)
});

it('renders without crashing',()=>{
  const div=document.createElement('div')
  ReactDOM.render(<MemoryRouter><SignUpForm/></MemoryRouter>,div);
  ReactDOM.unmountComponentAtNode(div)
});
