Ext.Loader.setConfig({
    enable: true
});

Ext.application({
    name: 'SE',
    requires: [
        'SE.view.MainView'
    ],
    // requires: [
    //     'Ext.window.MessageBox'
    // ],
    stores: [
      'Sessions',
        'SessionPresenters',
        'Presenters'
    ],
    models: [
        'Sessions',
        'SessionPresenter',
        'Presenter'
    ],
    views: [
        'Details',
        'Sessions',
        'SessionForm',
        'Presenters'
    ],
    controllers: [
        'SessionController'
    ],
    launch: function () {
        Ext.create('SE.view.MainView');
    }
});