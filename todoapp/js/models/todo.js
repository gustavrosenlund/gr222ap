﻿define(['backbone'], function (Backbone) {

    return Backbone.Model.extend({

        defaults: {
            title: 'nothing',
            status: 'Critical'
        }
    });
});