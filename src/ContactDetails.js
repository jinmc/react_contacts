import React from 'react'

export default class ContactDetails extends React.Component {
  render() {
    const details =
     (<div>
       <p>{this.props.contact.name}</p>
       <p>{this.props.contact.phone}</p>
      </div>);
    const blank = (<div>
      <p>Not Selected</p></div>);
    return  (
      <div>
        {this.props.isSelected ? details : blank}
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: ''
  }
};
