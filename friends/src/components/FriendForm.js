/*   
A form that allows for user input and 
subsequently POST the content to an API
*/

import React from "react";
import axios from "axios";

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        };
    }

    changeHandler = (e, type) => {
        this.setState({
            [type]: e.target.value
        });
    };

    onAddFriend = e => {
        const [name, age, email] = [
            this.state.name,
            Number(this.state.age),
            this.state.email
        ];
        // change state and trigger a re-render by react
        this.setState({ name: "", age: "", email: "" });
        axios
            // Submits data to be processed to a specified resource
            // Using POST gives us that same response object with information 
            // that we can use inside of our then call.
            .post("http://localhost:5000/friends", {
                name,
                age,
                email
            })
            .then(res => this.props.updateList(res.data))
            .catch(err => {
                throw new Error(err);
            });
    };

    render() {
        return (
            <div className="FriendFormContainer">
                <form onSubmit={this.onAddFriend}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        //  whenever a form field is changed, this OnChange event is fired
                        onChange={e => this.changeHandler(e, "name")}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={e => this.changeHandler(e, "age")}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={e => this.changeHandler(e, "email")}
                    />
                    <div className="button-container">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default FriendForm;
