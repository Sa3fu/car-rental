import React from 'react';

class ManagerLogin extends React.Component {
  render() { 
    return(
      <form className="ui form">
<div className="field">
  <label>First Name</label>
  <input type="text"  placeholder="First Name"/>
</div>
<div className="field">
  <label>Last Name</label>
  <input type="text"  placeholder="Last Name"/>
</div>
<div className="field">
  <div className="ui checkbox">
    <input type="checkbox"  className="hidden"/>
    <label>I agree to the Terms and Conditions</label>
  </div>
</div>
<button className="ui button" type="submit">Submit</button>
</form>
  );
  }
}
 
export default ManagerLogin;
