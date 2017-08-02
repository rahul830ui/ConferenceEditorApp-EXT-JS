Ext.define('SE.view.MainView', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'fit'
//                        align: 'stretch'
    },
//                    items: [combineSessionsSpeaker, detailsPanel]
    items: [
        {
            xtype: 'panel',
            resizable: false,
            collapsed: false,
            layout: 'border',
            items: [
                {
                    xtype: 'container',
                    region: 'center',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
//                                    flex: 1,
//                            split: true,
                    items: [
                        {
                            xtype: 'sessionsgridpanel',
                            flex: 3
                        }, {
                            xtype: 'splitter',
                        }, {
                            xtype: 'presenters',
                            flex: 2
                        }]
                },  {
                    region: 'east',
                    xtype: 'detailspanel',
                    flex: 2,
                    split: true,
//                                    title: 'Details Panel',
//                                    collapseDirection: 'right',
//                                    collapsible: true,
//                                    collapsed: true
                }
            ]
        }
    ]
});