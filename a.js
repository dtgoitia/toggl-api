/**
 * Toggl API authentication
 * curl -v -u username:password -X GET https://www.toggl.com/api/v8/me
 * 
 * You need to do this in JS
 */

/*
const domino = require('domino');
const window = domino.createWindow('<html></html>');
const document = window.document;

const $ = require('jquery')(window);
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
$.support.cors = true;
$.ajaxSettings.xhr = function() {
    return new XMLHttpRequest();
};

$.ajax
  ({
    type: "GET",
    url: "https://www.toggl.com/api/v8/me",
    data: {username: myUsername, password: myPassword},
    contentType: "application/json; charset=utf-8",
    crossDomain: true,
    success: function (data){
        console.log(' >>> Wii!!\n',data);
    },
    error: function (err) {
        console.log('Nope... Try again! :P\n',err);
    }
});
*/
const loginData = require('./loginData');
const myUsername =  loginData.username;
const myPassword =  loginData.password;
const myApiToken =  loginData.apiToken;

const myUrl =       'https://www.toggl.com/api/v8/me';

var TogglClient = require('toggl-api');
var toggl = new TogglClient({apiToken: myApiToken});

