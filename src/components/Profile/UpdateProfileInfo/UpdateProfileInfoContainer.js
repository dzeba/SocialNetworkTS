import React from "react";
import {connect} from "react-redux";
import {getUserProfile, SavePhoto, setProfileInformation} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import UpdateProfileInfo from "./UpdateProfileInfo";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";



class UpdateProfileInfoContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.authorizedUserId
        this.props.getUserProfile(userId);
    }
    render() {
        if (!this.props.profile) {
            return <Preloader/>
        } else
        return <div>
            <UpdateProfileInfo isDone={this.props.isDone} profile={this.props.profile}
                               setProfileInformation={this.props.setProfileInformation}
                               SavePhoto={this.props.SavePhoto}

            />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        isDone: state.profilePage.isDone,
        profile: state.profilePage.profile,
        authorizedUserId: state.auth.userId,
    }
}

export default compose
(connect(mapStateToProps, {
    setProfileInformation,
    SavePhoto,
    getUserProfile}),
withAuthRedirect)
(UpdateProfileInfoContainer);