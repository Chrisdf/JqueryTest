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

        var fdb = new ForerunnerDB();
        var db = fdb.db('OFSPRO');
        var collection = db.collection('work_orders');

        $.get('http://10.1.10.126:3000/work_orders', function (data) {

        });
        	
		
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var deviceLocationElement = document.getElementById('device_location');
        $.get('http://10.1.10.126:3000/work_orders', function(data) {
            var fdb = new ForerunnerDB();
            var db = fdb.db('ofs2');
            var work_orders = db.collection('work_orders');
            work_orders.insert(data);

            var work_order_data = work_orders.find();
            deviceLocationElement.innerHTML = work_order_data[0]['_id'];
            var workOrderList = document.getElementById('work_order_list');
            for (var work_order in work_order_data)
            {
                console.log(work_order);
                $("#EntityList").innerHTML += work_order + "\n";
            }

        });
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
