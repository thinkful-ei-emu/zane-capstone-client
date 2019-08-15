import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom'
import CreateFormHeader from './CreateFormComponent/CreateFormHeader';
import CreationForm from './CreateFormComponent/CreationForm';



it('renders without crashing',()=>{
  const div=document.createElement('div')
  ReactDOM.render(<MemoryRouter><CreateFormHeader/></MemoryRouter>,div);
  ReactDOM.unmountComponentAtNode(div)
});

it('renders without crashing',()=>{
  const div=document.createElement('div')
  ReactDOM.render(<MemoryRouter><CreationForm/></MemoryRouter>,div);
  ReactDOM.unmountComponentAtNode(div)
});
