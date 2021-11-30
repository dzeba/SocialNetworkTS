import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import UpdateProfileInfoContainer from "./components/Profile/UpdateProfileInfo/UpdateProfileInfoContainer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
                <div className="App">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app_content'>
                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer/>
                        }/>
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>
                        }/>
                        <Route path='/users' render={() =>
                            <UsersContainer/>
                        }/>
                        <Route path='/login' render={() =>
                            <Login/>
                        }/>
                        <Route path='/updateInfo' render={() =>
                            <UpdateProfileInfoContainer/>
                        }/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps =(state)=>({
    initialized:state.app.initialized
})

export default connect(mapStateToProps, {
    initializeApp,
})(App);
