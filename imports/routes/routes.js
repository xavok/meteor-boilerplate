/**
 * Created by Xavok on 4/5/2017.
 */
import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import {Router, Route, browserHistory } from 'react-router';

import Signup from '/imports/ui/Signup';
import Dashboard from '/imports/ui/Dashboard';
import NotFound from '/imports/ui/NotFound';
import Login from '/imports/ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

const onEnterPublicPage = () => {
    if(Meteor.userId()) {
        browserHistory.replace('/dashboard');
    }
};
const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if(isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/dashboard');
    } else if(isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/');
    }
};

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" components={Login} onEnter={onEnterPublicPage} />
        <Route path="/signup" components={Signup} onEnter={onEnterPublicPage}/>
        <Route path="/dashboard" components={Dashboard} onEnter={onEnterPrivatePage} />
        <Route path="*" components={NotFound} />
    </Router>
);
