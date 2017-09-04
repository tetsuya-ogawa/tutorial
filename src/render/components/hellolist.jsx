import * as React from 'react';
import HelloWorld from './helloworld'

export default class HelloList extends React.Component{
  render(){
    return (
      <div>
        <HelloWorld />
        <HelloWorld />
      </div>
    );
  }
}
