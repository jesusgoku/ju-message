/**
 * Show messages with animate.css animation and look of bootstrap alert
 *
 * @author: Jesus Urrutia
 * @url: http://jesusurrutia.com
 *
 */
(function($) {
    $.extend({
        juMessage: function(options) {
            var types = ['info', 'success', 'error'];
            var type = '';
            var config = {
                title           : '',
                message         : 'Hello! I\'am showMsg method',
                type            : '',
                effectIn        : 'flipInX',
                effectOut       : 'flipOutX',
                messageDuration : 2,
                position        : 'absolute',
                width           : '300px',
                left            : '50%',
                top             : '10%',
                marginLeft      : '-150px',
                marginTop       : '0'
            };
            $.extend(config, options);
            if ('' !== config.type && -1 !== types.indexOf(config.type)) {
                type = ' alert-' + types[ types.indexOf(config.type) ];
            } else {
                type = '';
                config.type = null;
            }
            var html = '';
            if ('' !== config.title) {
                html += '<h4>' + config.title + '</h4>';
            }
            html += '<p>' + config.message + '</p>';
            var $divMsg = $('<div />')
                    .addClass('alert animated' + type + ' ' + config.effectIn)
                    .css({
                        'position'    : 'absolute',
                        'left'        : config.left,
                        'top'         : config.top,
                        'width'       : config.width,
                        'margin-left' : config.marginLeft,
                        'margin-top'  : config.marginTop,
                        'z-index'     : '1000000'
                    })
                    .html(html)
                    .prependTo('body')
            ;
            var effectDuration = 'hinge' === config.effectOut ? 3 : 2;
            setTimeout(function() {
                $divMsg
                        .removeClass(config.effectIn)
                        .addClass(config.effectOut)
                ;
            }, (config.messageDuration + 1) * 1000);
            setTimeout(function() {
                $divMsg.remove();
            }, (config.messageDuration + effectDuration) * 1000);
        }
    });
})(jQuery);
