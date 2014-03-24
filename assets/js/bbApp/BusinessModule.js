if (!this.Billit || typeof this.Billit !== 'object') {
    this.Billit = {};
}
(function () {
    'use strict';

    //the module
    Billit.module('BusinessModule', function (Mod, Billit, Backbone, Marionette, $, _) {

        //==================================
        //initializer called on Billit.start(options)
        //==================================
        Mod.addInitializer(function (options) {
            Mod.controller = new Controller({
                region: Billit.businessDataRegion
            });
        });


        //==================================
        //Controller for the BusinessModule
        //==================================
        var Controller = Backbone.Marionette.Controller.extend({
            initialize: function (options) {
                console.log('BusinessModule:Controller:initialize');
                this.view = new BusinessDataView();
                options.region.show(this.view);
            }
        });
    });

    //the model
    var BusinessModel = Backbone.Model.extend({});

    //the item view
    var BusinessDataView = Backbone.Marionette.ItemView.extend({
        //model: BusinessModel, //TODO figure out how to assign a model
        template: '#tplBusinessData',
        tagname: 'div',
        addClass: 'BusinessInfo',
        events: {
            'click': 'itemClicked'
        },
        itemClicked: function(){
            console.log('BusinessData clicked');
            Billit.vent.trigger(this.model.get('name'), this)
        }
    });
})();
