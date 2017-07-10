/**
 * Toggl API authentication
 * curl -v -u username:password -X GET https://www.toggl.com/api/v8/me
 * 
 * You need to do this in JS
 */


const domino = require('domino');
const window = domino.createWindow('<html></html>');
const document = window.document;

const $ = require('jquery')(window);
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
$.support.cors = true;
$.ajaxSettings.xhr = function () {
    return new XMLHttpRequest();
};
/*
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
const myUsername = loginData.username;
const myPassword = loginData.password;
const myApiToken = loginData.apiToken;
const myWorkspace = loginData.workspaceId;
const myHeaders = {
    'username': myUsername,
    'password': myPassword
}

const myUrl = 'https://www.toggl.com/api/v8/me';
//const myUrl = 'http://example.com/object/details?version=1.1';

const TogglClient = require('toggl-api');
const toggl = new TogglClient({apiToken: myApiToken});

toggl.detailedReport({
    user_agent: myUsername,
    workspace_id: myWorkspace,
}, function(err, timeEntry) {
    let summary = timeEntry.data.map((x) => {
        return x.description
    });
    console.log('summary:\n',summary);
    
});

/**
 toggl.detailedReport.data format:
 { id: 637416109,
  pid: null,
  tid: null,
  uid: 2626092,
  description: 'Some cool work',
  start: '2017-07-10T15:52:19+01:00',
  end: '2017-07-10T15:52:57+01:00',
  updated: '2017-07-10T15:52:57+01:00',
  dur: 38748,
  user: 'David',
  use_stop: true,
  client: null,
  project: null,
  project_color: '0',
  project_hex_color: null,
  task: null,
  billable: null,
  is_billable: false,
  cur: null,
  tags: [] }
 */