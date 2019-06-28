import React, { Component } from 'react';
import PropTypes from "prop-types";
import CircularProgress from 'material-ui/CircularProgress'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { loadProfile } from "../../actions/profileActions";
import './Profile.css';


 class Profile extends Component {

     static propTypes = {
         profileId: PropTypes.number.isRequired
     };

     static defaultProps = {
         profileId: 1,
     };

     componentDidMount() {
         this.props.loadProfile();
     }

    render() {

        const { profiles, isLoading, profileId} = this.props;
        let pageContent;

        if (Object.keys(profiles).length > 0) {
            pageContent = <p> My name is - {profiles[profileId].name}, email - {profiles[profileId].email}</p>
        }else {
            pageContent = <CircularProgress />
        }

        return(
            <div>
                <h1>Hi, This is my profile</h1>
                {pageContent}
            </div>
        );
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    profiles: profileReducer.profiles,
    isLoading: profileReducer.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);