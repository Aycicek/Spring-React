import React from 'react';
import axios from 'axios';

class UserSingUpPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null
  };
//tek bir tane onChange metosu tüm fieldlarımız için çalışır hale geldi.

  onChange = event => {
    const { name, value } = event.target;
    //altta ki kullanım yerine yukarıdaki kullanımı yaptık. Buna "object destructuring" denir
        // const value=event.target.value;
        // const name=event.target.name;
    this.setState({
      [name]: value
       // name bir değişken olduğu için köşeli parantezle yazacağız
      
    });
  };

  onClickSignup = event => {
    event.preventDefault();

    const { username, displayName, password } = this.state;

    const body = {
      username,
      displayName,
      password
    };

    axios.post('/api/1.0/users', body);
  };

  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Username</label>
          <input name="username" onChange={this.onChange} />
        </div>
        <div>
          <label>Display Name</label>
          <input name="displayName" onChange={this.onChange} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" onChange={this.onChange} />
        </div>
        <div>
          <label>Password Repeat</label>
          <input name="passwordRepeat" type="password" onChange={this.onChange} />
        </div>
        <button onClick={this.onClickSignup}>Sign Up</button>
      </form>
    );
  }
}

export default UserSingUpPage;