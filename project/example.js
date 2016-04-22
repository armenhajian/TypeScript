Ecl('module/name', {
    execute: function () {
        with (this) {
            Ecl(this, 1, 'ClassName', function () {
            });
            Ecl(this, 2, 'funName', function () {
            });
            Ecl(this, 3, 'varName', function () {
            });
            // definition
            // definition
            // definition
            return function () {
                //'statement';
                //'statement';
                //'statement';
                return 'default expression';
            }
        }
    },
    imports: {
        'otherApp': {
            '@module': ['sum'], // * as lib
            '@default': ['B1'], // default as b1
            'Gugo': ['lib'] // gugo as lib
        }
    },
    exports: {
        'module/one': '*',
        'module/name': {
            '@module': ['A1', 'A2'],
            '@default': ['B1', 'B2'],
            'Config': ['Config', 'A', 'B']
        }
    }
});
