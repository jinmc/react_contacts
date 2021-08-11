import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [{
        name: 'JmChong',
        phone: '010-0000-0001'
      }, {
        name: "hncho",
        phone: '010-0000-0002'
      }, {
        name: "jspark",
        phone: '010-0000-0003'
      }, {
        name: "ysyang",
        phone: "010-0000-0004"
      }]
    }
  }

  render(){
    const mapToComponents = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
        />
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}
