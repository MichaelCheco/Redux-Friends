 import React, { Component, Fragment } from 'react';
 import { connect } from "react-redux"


 class FriendsListView extends Component {
// remember to use `this`
   componentDidMount() {
       
   }
     render() {
         return (
            <Fragment>

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

 export default connect(mapStateToProps, {  })(FriendsListView)

//  friends: [],
//  fetchingFriends: false,
//  friendsFetched: false,
//  error: null