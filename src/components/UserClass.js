import React from "react";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props);
        console.log(props);

        this.state = {
            userInfo : {
                name : "dummy",
                bio : "web dev"
            }
        }
    }

    async componentDidMount()
    {
        const data = await fetch("https://api.github.com/users/gauravpandeyy")

        const json = await data.json();

        console.log(json)

        this.setState({
            userInfo : json
        })
    }

    render()
    {
        const { name, bio } = this.state.userInfo;
        

        return(
            <div className="user-info text-lg text-gray-700">
                <h1>{name}, </h1>
                <h2>Web developer</h2>
            </div>
        );
    };
}

export default UserClass;