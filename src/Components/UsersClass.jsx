import React, { Component } from 'react'

export default class UsersClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[],
        };
    }
   
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((yes)=> yes.json())
    .then((users)=> {
        this.setState({
        users: users,
    });
})
    .catch((no) => {
        console.log(no);
    });
}

    render() {
        console.log(this.setState);
        return (
            <div>
                <h1>MY USERS</h1>
                {this.state.users.map((user, id) => (
                    <div key={id}>
                        <h5>{user.name}</h5>
                        <h5>{user.username}</h5>
                        <h5>{user.email}</h5>
                    </div>
                ))}
            </div>
        );
    }
}
