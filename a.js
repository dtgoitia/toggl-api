/**
 * Toggl API authentication
 * curl -v -u username:password -X GET https://www.toggl.com/api/v8/me
 */
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

const loginData = require('./loginData');
const myUsername = loginData.username;
const myPassword = loginData.password;
const myApiToken = loginData.apiToken;
const myWorkspace = loginData.workspaceId;
const startDate = '2017-07-09'
const endDate = '2017-07-09'

const TogglClient = require('toggl-api');
const toggl = new TogglClient({apiToken: myApiToken});

// Get detailed report data
toggl.detailedReport({
    user_agent: myUsername,
    workspace_id: myWorkspace,
    since: startDate,
    until: endDate,
}, function(err, timeEntry) {
    let summary = timeEntry.data.map((task) => {
        return {
            project: task.project,
            description: task.description,
            duration: new Date(task.dur)/3600000,   // duration in hours
            start: task.start,
            end: task.end
        }
    });
    console.log('summary:\n',summary);    
});

// 0:34:19
// 2059000