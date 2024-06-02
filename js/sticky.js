! function() {
    "use strict";
    var t = window.jQuery,
        e = window.Waypoint;

    function i(s) {
        this.options = t.extend({}, e.defaults, i.defaults, s), this.element = this.options.element, this.$element = t(this.element), this.createWrapper(), this.createWaypoint()
    }
    i.prototype.createWaypoint = function() {
        var i = this.options.handler;
        this.waypoint = new e(t.extend({}, this.options, {
            element: this.wrapper,
            handler: t.proxy(function(t) {
                var e = this.options.direction.indexOf(t) > -1,
                    s = e ? this.$element.outerHeight(!0) : "";
                this.$wrapper.height(s), this.$element.toggleClass(this.options.stuckClass, e), i && i.call(this, t)
            }, this)
        }))
    }, i.prototype.createWrapper = function() {
        this.options.wrapper && this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0]
    }, i.prototype.destroy = function() {
        this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass), this.options.wrapper && this.$element.unwrap())
    }, i.defaults = {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: "stuck",
        direction: "down right"
    }, e.Sticky = i
}();