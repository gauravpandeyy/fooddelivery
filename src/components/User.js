const User = ({name}) => {
    return(
        <div className="user-info">
            <h1>Name : {name}</h1>
            <h2>Location : Pune</h2>
            <h3>Skills : JavaScript, React, C++</h3>
        </div>
    )
}

export default User;