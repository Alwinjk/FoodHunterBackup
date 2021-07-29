import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadUserList } from '../../store/thunk';
import { useEffect } from 'react';

import './userlist.css';


const handleFollowRequest = async (currentUserid, userid) => {
    try {
        await axios.put(`users/${userid}/following`, { currentuser: currentUserid });
    } catch (err) {
        console.log("follow request error", err);
    }
}

const handleCancelFollowRequest = async (currentUserid, userid) => {
    try {
        await axios.put(`users/${userid}/cancel-follow-request`, { currentuser: currentUserid });
    } catch (err) {
        console.log("follow request error", err);
    }
}

const Userlist = ({ user, userList, startLoadingUserList }) => {

    useEffect(() => {
        startLoadingUserList();
    }, []);
    userList.map(user => {
        console.log(user.firstname);
    });

    return (
        <>
            <section>
                {
                    userList.map(currentUser => {
                        return (
                            // <div className="user-container">
                            //     <div className="avatar-container">
                            //         {currentUser.avatar === undefined ? <img src="../../public/images/logo.png" alt="logo" /> : <img src={currentUser.avatar.url} />}
                            //     </div>
                            //     <p style={{ color: "white" }}>{currentUser.firstname} {currentUser.lastname}</p>
                            //     <button onClick={() => handleFollowRequest(currentUser._id, user._id)}>Follow</button>
                            //     <button onClick={() => handleCancelFollowRequest(currentUser._id, user._id)}>Cancel Request</button>
                            // </div>
                            <div className="ananthu-right">
                                <div className="user-info">
                                    <h3>
                                        Ananthu

                                    </h3>
                                    <button className="btn">View Profile</button>
                                </div>

                                <div className="user-ananthu">
                                    <p className="user-bio-name">Ananthu Purushothaman</p>
                                    <p>This is the user biography <br /> stirling avenue thejhkjHk </p>
                                </div>
                            </div>

                        )
                    })
                }
            </section>
        </>

    )
}

const mapStateToProps = state => ({
    user: state.user,
    userList: state.userList
});

const mapDispatchToProps = dispatch => ({
    startLoadingUserList: () => dispatch(loadUserList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Userlist);