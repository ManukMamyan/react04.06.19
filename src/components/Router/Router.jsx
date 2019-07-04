import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Layout from '../Layout';
import Profile from '../Profile';
import InstallPopup from '../InstallPopup';


export default class Router extends React.Component {
    componentDidMount() {
        console.log('It works!');
    }

    render() {
        return (
            [
                <InstallPopup/>,
                <Switch key={'router'}>
                    <Route exact path='/' component={Layout}/>
                    <Route exact path='/profile/' render={() => <Profile/>}/>
                    <Route exact path='/chat/:chatId/'
                           render={obj => <Layout chatId={Number(obj.match.params.chatId)}/>}/>
                    {/*<Route exact path='/chat/:chatId/' render={ obj => console.log(obj) } /> } />*/}
                </Switch>
            ]

        )
    }
}