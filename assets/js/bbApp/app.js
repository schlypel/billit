if (!this.Billit || typeof this.Billit !== 'object') {
    this.Billit = {};
}
(function () {
    'use strict';
    Billit = new Backbone.Marionette.Application();

    Billit.addRegions({
        userDataRegion: "#rgnUserData",
        businessDataRegion: "#rgnBusinessData",
        tasklistRegion: '#rgnTasklist'
    });

    Billit.vent.on('all', function (evt, model) {
        console.log('Billit DEBUG: Event caught: ' + evt);
        if (model) {
            console.dir(model);
        }
    });
})();
