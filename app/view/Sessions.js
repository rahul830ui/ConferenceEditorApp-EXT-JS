Ext.define('SE.view.Sessions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessionsgridpanel',
    store: 'Sessions',
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'id',
            text: 'Id'
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'title',
            text: 'Title',
            flex: 1,
            minWidth: 100,
            width: 75
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'approved',
            text: 'Approved'
        }, {
            dataIndex: 'sessionTimePretty',
            text: 'session Start Time',
            width: 180
        }
    ],
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: [
                '{[values.rows[0].get(\'sessionTimePretty\')]} (Session Count: {rows.length})'
            ]
        }
    ]
});