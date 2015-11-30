'use strict';

import Backbone from 'backbone';
import $ from 'jquery';

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index'
    },

    index: function() {
        console.log('index');
    }
});

new AppRouter();
Backbone.history.start();
