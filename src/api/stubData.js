'use strict';

module.exports = {
  sessions: [],
  users: [
    /* 1 */
    {
        "_id" : "562054e365ae3398ca2be04a",
        "email" : "SarahConnor@gmail.com",
        "password" : "SarahConnor",
        "firstName" : "Sarah",
        "lastName" : "Connor",
        "nickname" : "",
        "admin" : true,
        "enabled" : true,
        "accessList" : ["SkyNet-group", "Resistance-group"]
    },

    /* 2 */
    {
        "_id" : "5620550165ae3398ca2be04b",
        "email" : "KyleReese@gmail.com",
        "password" : "KyleReese",
        "firstName" : "Kyle",
        "lastName" : "Reese",
        "nickname" : "",
        "admin" : false,
        "enabled" : true,
        "accessList" : ["Resistance-group"]
    },

    /* 3 */
    {
        "_id" : "5620551365ae3398ca2be04c",
        "email" : "JohnConnor@gmail.com",
        "password" : "JohnConnor",
        "firstName" : "John",
        "lastName" : "Connor",
        "nickname" : "",
        "admin" : true,
        "enabled" : true,
        "accessList" : ["Resistance-group"]
    },

    /* 4 */
    {
        "_id" : "562279eff6010085fe6c2213",
        "email" : "Terminator@gmail.com",
        "password" : "Terminator",
        "firstName" : "T",
        "lastName" : "800",
        "nickname" : "",
        "admin" : false,
        "enabled" : true,
        "accessList" : ["SkyNet-group"]
    },

    /* 5 */
    {
        "_id" : "56227a21f6010085fe6c2214",
        "email" : "T1000@gmail.com",
        "password" : "T1000",
        "firstName" : "T",
        "lastName" : "1000",
        "nickname" : "",
        "admin" : false,
        "enabled" : true,
        "accessList" : ["SkyNet-group"]
    }
  ],
  groups: [
    /* 1 */
    {
        "_id": "SkyNet-group",
        "name" : "SkyNet",
        "enabled" : true,
        "subnets" : []
    },

    /* 2 */
    {
        "_id": "Resistance-group",
        "name" : "Resistance",
        "enabled" : true,
        "subnets" : []
    }
  ],
  subnets: [
    /* 1 */
    {
        "_id" : "56227febf6010085fe6c2216",
        "subnetIP" : "10.10.10.0",
        "regex": "",
        "class" : "C",
        "type" : 24,
        "name" : "Resistance Network",
        "description" : "Time-machine mainframe",
        "subnets" : {}
    },

    /* 2 */
    {
        "_id" : "56227fc2f6010085fe6c2215",
        "subnetIP" : "192.168.0.0",
        "regex" : "",
        "class" : "C",
        "type" : 24,
        "name" : "Main Network",
        "description" : "Used to infiltrate Resistance",
        "subnets" : {}
    }
  ]
};
