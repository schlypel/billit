if (!this.Billit || typeof this.Billit !== 'object') {
    this.Billit = {};
}
(function () {
    'use strict';

    //the module
    Billit.module('UserModule', function (Mod, Billit, Backbone, Marionette, $, _, Handlebars) {

        //==================================
        //initializer called on Billit.start(options)
        //==================================
        Mod.addInitializer(function (options) {
            Mod.controller = new Controller({
                region: Billit.userDataRegion
            });
        });


        //==================================
        //Controller for the UserModule
        //==================================
        var Controller = Backbone.Marionette.Controller.extend({
            initialize: function (options) {
                console.log('UserModule:Controller:initialize');
                this.view = new UserDataView();
                options.region.show(this.view);
            }
        });
    });

    //the model
    var UserModel = Backbone.Model.extend({});
    var fixture = {name: 'Homer Simpson',contact: [{name: 'Email',value:'homer@simpsons.com',icon:'envelope'}]};
    var user = new UserModel(fixture);

    //the item view
    var UserDataView = Backbone.Marionette.ItemView.extend({
        model: user, //TODO figure out how to assign a model
        template: Handlebars.compile($('#tplUserData').html()),
        tagname: 'div',
        addClass: 'userInfo',
        events: {
            'click': 'itemClicked'
        },
        itemClicked: function(){
            console.log('UserData clicked');
            Billit.vent.trigger(this.model.get('name'), this)
        },
        initialize: function(){
            this.model.on('change', this.render);
        }/*,
        render: function(){

        }*/
    });
})();
