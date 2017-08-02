Ext.define('SE.store.Sessions', {
    extend: 'Ext.data.Store',
    model: 'SE.model.Sessions',
    autoLoad: true,
    autoSync: true,

    sorters: [
        {property: 'title'}
    ],
    groupField: 'sessionTimeDateTime'

});