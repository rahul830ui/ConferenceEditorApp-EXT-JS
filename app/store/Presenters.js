Ext.define('SE.store.Presenters', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    // autoSync: true,


    requires: [
        'SE.model.Presenter',
        'Ext.util.Filter'
    ],

    model: 'SE.model.Presenter',
    storeId: 'Presenters',
    pageSize: 999,
    filters: {
        filterFn: function (item) {
            return false;

        }
    }
});