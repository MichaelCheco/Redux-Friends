 import React, { Component, Fragment } from 'react';
 import { connect } from "react-redux"
import { getFriends } from "../actions"
import { FriendsList } from "../components"
 class FriendsListView extends Component {
// remember to use `this`
   componentDidMount() {
       this.props.getFriends()
   }
     render() {
         return (
            <Fragment>
                {this.props.fetchingFriends ? <h3>Fetching Friends... </h3> : this.props.friends.map((friend, index) => (
                    <FriendsList key={index} friends={friend}/>
                ))}
            </Fragment>
         )
     }
 }

 const mapStateToProps = state => {
     return {
        friends: state.friendsReducer.friends,
        error: state.friendsReducer.error,
        fetchingFriends: state.friendsReducer.fetchingFriends,
        friendsFetched: state.friendsReducer.friendsFetched
     }
 }

 export default connect(mapStateToProps, { getFriends })(FriendsListView)

//  friends: [],
//  fetchingFriends: false,
//  friendsFetched: false,
//  error: null