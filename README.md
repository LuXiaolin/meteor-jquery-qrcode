jquery-qrcode
======================

Meteor jquery smart package for creating qrcodes.

    meteor add dschulz:jquery-qrcode

Originally by [EtherPOS](http://www.etherpos.com/ "EtherPOS")

(Forked by [dschulz](https://github.com/dschulz) in order to update the jQuery.qrcode library)


Quick usage:
=============


In a template: 

    <template name="sometemplate">

         <h1>QR Code should appear below</h1>
         <br /><br />     
         <div id="qrcode"></div>
     
    </template>


In client JS code:

    Template.sometemplate.rendered = function(){
       $('#qrcode').qrcode( { 
            text: Random.secret(32), 
            render: 'canvas',
            width: 128,
            height: 128, 
            ecLevel: 'H',
            fill: "#910101",
            background: "#fafafa",
            radius: 0.2,
        }); 
    };



Please refer to the [original documentation](http://larsjung.de/jquery-qrcode/) to see available options.


Original jquery plug-in information & authorship
=================================================
jQuery.qrcode 0.2 - http://larsjung.de/qrcode - MIT License

Uses [QR Code Generator](http://www.d-project.com/qrcode/index.html) (MIT), appended to the end of this file.

Kudos to [jquery.qrcode.js](http://github.com/jeromeetienne/jquery-qrcode) (MIT).
