$(document).ready(function () {
    var services = [{ 'id': '1', 'name': 'Waterproofing', 'color': '#2ecc71' }, { 'id': '2', 'name': 'ManPower Services', 'color': 'orange' },
        { 'id': '3', 'name': 'IT Projects', 'color': '#e74c3c' }, { 'id': '4', 'name': 'Stationary and Housekeeping Supplies', 'color': '#f4d03f' },
        { 'id': '5', 'name': 'ISO and Food Safety Consultants', 'color': '#e59866' }];
    var lihtml = '';
    for (var i = 0; i < services.length; i++) {
        lihtml += '<li><input id="' + services[i].id + '" type="checkbox"/><label style="background-color:'+services[i].color+'">' + services[i].name + '</label></li>';

    }
    $('#services').append(lihtml);

    var angleStart = -360;

    // jquery rotate animation
    function rotate(li, d) {
        $({ d: angleStart }).animate({ d: d }, {
            step: function (now) {
                $(li)
                   .css({ transform: 'rotate(' + now + 'deg)' })
                   .find('label')
                      .css({ transform: 'rotate(' + (-now) + 'deg)' });
            }, duration: 0
        });
    }

    // show / hide the options
    function toggleOptions(s) {
        $(s).toggleClass('open');
        var li = $(s).find('li');
        var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
        for (var i = 0; i < li.length; i++) {
            var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
            $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
        }
    }

    //$('.divselector button').click(function (e) {
    //    toggleOptions($(this).parent());
    //});

    setTimeout(function () { toggleOptions('.divselector'); }, 100);
});
