import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsersThunkCreator, onPageChangedThunkCreator,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props}
                   onPageChanged={this.onPageChanged}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {
    follow: follow,
    unfollow,
    toggleFollowingProgress,
    getUsersThunkCreator,
    onPageChangedThunkCreator,

})(UsersContainer);