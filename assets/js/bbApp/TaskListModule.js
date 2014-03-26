if (!this.Billit || typeof this.Billit !== 'object') {
    this.Billit = {};
}
(function () {
    'use strict';

    //the module
    Billit.module('TaskListModule', function (Mod, Billit, Backbone, Marionette, $, _, Handlebars) {

        //==================================
        //initializer called on Billit.start(options)
        //==================================
        Mod.addInitializer(function (options) {
            Mod.controller = new Controller({
                region: Billit.taskListRegion
            });
        });


        //==================================
        //Controller for the TaskListModule
        //==================================
        var Controller = Backbone.Marionette.Controller.extend({
            initialize: function (options) {
                console.log('TaskListModule:Controller:initialize');
                this.view = new TaskListView();
                options.region.show(this.view);
            }
        });
    });

    //the model
    var TaskListModel = Backbone.Model.extend({});
    var fixture = {name: 'Homer Simpson',contact: [{name: 'Email',value:'homer@simpsons.com',icon:'envelope'}]};
    var taskList = new TaskListModel(fixture);

    //the item view
    var TaskListView = Backbone.Marionette.ItemView.extend({
        model: taskList,
        template: Handlebars.compile($('#tplTaskList').html()),
        tagname: 'div',
        addClass: 'TaskListInfo',
        events: {
            //'click': 'itemClicked'
        },
        initialize: function(){
            //this.model.on('change', this.render);
        }/*,
        render: function(){

        }*/
    });
})();
