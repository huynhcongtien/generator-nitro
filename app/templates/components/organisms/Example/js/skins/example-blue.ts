/// <reference path="../../../../../assets/vendor/terrific/dist/Terrific.d.ts" />

module T {
    function ExampleBlue(mod:Module) {
        var start = mod.start.bind(mod);
        mod.start = function (resolve:(value?:any) => void, reject:(error?:any) => void) {
            var $ctx = $(this._ctx);

            console.log('Example Skin Blue - start id: [' + $ctx.data('t-id') + ']');

            start(resolve, reject); // calling original method
        };

        var sync = mod.sync.bind(mod);
        mod.sync = function() {
            var $ctx = $(this._ctx);

            console.log('Example Skin Blue - sync id: [' + $ctx.data('t-id') + ']');

            sync(); // calling original method
        };
    }

    Module['<%= component.js %>']['<%= skin.js %>'] = ExampleBlue;
}