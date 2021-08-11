import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails'
import ContactCreate from './ContactCreate'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: [{
        name: 'jmChong',
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

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleClick(key) {
    this.setState({
      selectedKey: key
    })
    console.log(key, "is selected")
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate(contact) {
    this.setState({
      contactData: [...this.state.contactData, contact]
    });
  }

  handleRemove(e) {

  }

  handleEdit(e) {

  }

  render(){
    const mapToComponents = (data) => {
      data.sort((a, b) => {return a.name.localeCompare(b.name);});
      // console.log(data)
      data = data.filter(
        (contact) => {
          return contact.name.indexOf(this.state.keyword) > -1
        }
      );
      return data.map((contact, i) => {
        return (<ContactInfo
            contact={contact}
            key={i}
            onClick={()=> this.handleClick(i)}
          />);
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey != -1}
          contact={this.state.contactData[this.state.selectedKey]}
          />
          <ContactCreate onCreate={this.handleCreate}/>
      </div>
    );
  }
}
