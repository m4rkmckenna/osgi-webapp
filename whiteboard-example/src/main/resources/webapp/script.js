(function (c3) {
    var gauges = [];

    for (var i = 1; i <= 9; i++) {
        gauges.push(newGauge(i));
    }

    updateGauges();
    setInterval(function () {
        updateGauges();
    }, 5000);

    function updateGauges() {
        gauges.forEach(function (gauge) {
            setTimeout(function () {
                gauge.load({
                        columns: [['App', Math.random() * 1000]]
                    }
                );
            }, Math.floor(Math.random() * 5000) + 1000)
        });
    };

    function newGauge(id) {
        return c3.generate({
            bindto: '#g' + id,
            data: {
                columns: [
                    ['App', Math.random() * 1000]
                ],
                type: 'gauge'
            },
            gauge: {
                min: 0,
                max: 1000,
                units: 'Transactions / Sec',
                label: {
                    format: function (value) {
                        return Math.round(value);
                    },
                    show: true
                }
            },
            color: {
                pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'],
                threshold: {
                    values: [250, 500, 750, 1000],
                    unit: 'value',
                    max: 1000,
                }
            }
            ,
            size: {
                height: 240
            }
        })
            ;
    }
})(window.c3);
