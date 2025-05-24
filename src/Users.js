import React from "react";

export default class Users extends React.Component {
    getUserList() {
        return "user list"
    }
    render() {
        return ( // JSX starts here, directly after the return keyword
            <div> {/* This is the single parent element */}
                <h2>USer Class component </h2>
            </div>
        ); // JSX ends here
    }
}