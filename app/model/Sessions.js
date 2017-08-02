Ext.define('SE.model.Sessions', {
    extend: 'Ext.data.Model',
    fields: [
        'id',
        'approved',
        'description',
        {
            name: 'title',
            sortType: 'asUCText'
        },
        {
            dateFormat: 'c',
            name: 'sessionTimeDateTime',
            sortType: 'asDate',
            type: 'date'
        },
        {
            convert: function(v, rec) {
                var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a'),
                    pretty = convertIt(rec.get("sessionTimeDateTime"));
                return pretty;
            },
            name: 'sessionTimePretty',
            type: 'string'
        }
    ],
    proxy: {
        type: 'rest',
        url: '/ConferenceEditorApp-EXT-JS/data/Ext/sessions.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
