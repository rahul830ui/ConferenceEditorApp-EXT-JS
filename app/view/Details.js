Ext.define('SE.view.Details', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.detailspanel',
    autoScroll: true,
    bodyPadding: 10,

    tpl: [
        '<section class="pageContent">',

        '       <h2 class="purpleRibbon">Session Detail</h2>',

        '       <section class="workshopInfo">',
        '           <h2>{title}</h2>',
        '           <section class="presentationBox">',
        '           <p>{description}</p>',
        '           </section>',
        '           </section>',
        '           <section class="workshopLeader">',
        '           <h2>Speaker(s)</h2>',
        '           <div class="inner">',
        '       <tpl for="presenters">',
        '<tpl>',
        '   <div class="leader">',
        '   <div class="leftColumn">',
        '   <img class="leaderPhoto" src="http://www.siliconvalley-codecamp.com/{imageUrl}?format=jpg&width=175&Height=175&scale=both&mode=crop" alt="{firstName} {lastName}" />',
        '   <p class="leaderName">{firstName} {lastName}</p>',
        '<p class="leaderURL"><a href="{webSite}">{webSite}</a></p>',
        '   </div>',

        '   <div class="rightColumn">',
        '   <h3>{firstName} {lastName}</h3>',
        '<div>{bio}</div>',
        '</div>',
        '</div>',
        '</tpl>',
        '</tpl>',

        '</div>',
        '</section>',
        '</section>',

    ],



    // data: {
    //    title: 'rahul'
    // }

});