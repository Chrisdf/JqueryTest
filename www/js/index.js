/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        console.log("initialized");
        var fdb = new ForerunnerDB();
        var db = fdb.db('OFSPRO');
        var collection = db.collection('work_orders');
        this.onDeviceReady();


       
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        console.log("binding events");
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log("recieved device ready event");
        var deviceLocationElement = document.getElementById('device_location');
            var fdb = new ForerunnerDB();
            var db = fdb.db('ofs2');
            var numbers = db.collection('numbers');

            numbers.insert([{ "_id": "55cce96b17e4bcdcaba6a6ce", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec117e4bcdcaba6a6cf", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec117e4bcdcaba6a6d0", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec117e4bcdcaba6a6d1", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec217e4bcdcaba6a6d2", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec217e4bcdcaba6a6d3", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec217e4bcdcaba6a6d4", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec217e4bcdcaba6a6d5", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec217e4bcdcaba6a6d6", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec317e4bcdcaba6a6d7", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec317e4bcdcaba6a6d8", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec317e4bcdcaba6a6d9", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec317e4bcdcaba6a6da", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceec417e4bcdcaba6a6db", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceecf17e4bcdcaba6a6dc", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed017e4bcdcaba6a6dd", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed017e4bcdcaba6a6de", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed017e4bcdcaba6a6df", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed017e4bcdcaba6a6e0", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed017e4bcdcaba6a6e1", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed117e4bcdcaba6a6e2", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed117e4bcdcaba6a6e3", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceed117e4bcdcaba6a6e4", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceefd17e4bcdcaba6a6ec", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceefe17e4bcdcaba6a6ed", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceefe17e4bcdcaba6a6ee", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceefe17e4bcdcaba6a6ef", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55cceeff17e4bcdcaba6a6f0", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler" }, { "_id": "55ccf49117e4bcdcaba6a6f6", "work_order_no": "GJ241", "job_scope": "This is a description job scope", "supervisor": "James Stutler", "work_order_assets": [{ "_id": "55ccf49117e4bcdcaba6a6f5", "asset_id": "55ccf40a17e4bcdcaba6a6f4", "hours": 15.2 }] }]);

            numbers.link('#work_order_list', '#myLinkFragment');
 
            var work_order_data = numbers.find({}, {});
            var workOrderList = document.getElementById('work_order_list');
                    
            var name = workOrderList.innerHTML;
            console.log(name);
        },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
