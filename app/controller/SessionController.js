Ext.define('SE.controller.SessionController', {
    extend: 'Ext.app.Controller',
    stores: [ 'Sessions', 'SessionPresenters', 'Presenters'],
    refs: [
        {
            ref: 'details',
            selector: 'detailspanel'
        },
        {
            ref: 'presenters',
            selector: 'presentersgrid'
        },
        {
            ref: 'sessions',
            selector: 'sessionsgrid'
        }
    ],

    onItemdblclick: function (gridpanel, record, item, e) {
        var formWindow = Ext.create('SE.view.SessionForm');

        var form = formWindow.down('form');
        form.loadRecord(record);
        formWindow.show();
    },
    // getSessionPresentersStore: function () {
    //     return this.getStore("SessionPresenters");
    // },

    init: function () {
        this.control({
            'sessionsgridpanel': {
                itemdblclick: this.onItemdblclick,

                select: function (rowmodel, record, index, eOpts) {
                    Ext.suspendLayouts();
                    // debugger;
                    var sessionId = record.get('id');

                    var presenterIds = [];
debugger;
                    var spStore = this.getSessionPresentersStore();
                    spStore.each(function (rec) {
                       if(rec.get('sessionId') === sessionId) {
                           presenterIds.push(rec.get('presenterId'));
                       }
                    });

                    this.getPresentersStore().clearFilter();
                    this.getPresentersStore().filterBy(function (rec) {
                        var foundMatch = false;
                        for (var i = 0; i < presenterIds.length; i++) {
                            if (rec.get('id') === presenterIds[i]) {
                                foundMatch = true;
                            }
                        }
                        return foundMatch;
                    });
                    //Details View

                    var sessions = record.getData();
                    sessions.presenters = [];
                    this.getPresentersStore().each(function (presenterRecord) {
                       sessions.presenters.push(presenterRecord.getData());
                    });

                    var detailsPanel = this.getDetails();
                    sessions.presenters = [];
                    this.getPresentersStore().each(function (presenterRecord) {
                        sessions.presenters.push(presenterRecord.getData());
                    });
                    detailsPanel.update(sessions);



                    Ext.resumeLayouts();
                }

            }
        });
    }
});