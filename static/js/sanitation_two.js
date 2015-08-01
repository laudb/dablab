$(function () {
// [{"Housing Facilities":"KVIP","Number":572.824,"Western":34.822,"Central":62.088,"Greater Accra":148.794,"Volta":63.237,"Eastern":100.193,"Ashanti":98.434,"Brong Ahafo":39.544,"Northern":14.587,"Upper East":6.196,"Upper West":4.929}]
    // Prepare demo data
    // var mydata = JSON.parse(openDefData);

    var data = [
        {
            "hc-key": "gh-ah",
            "value": 207221
        },
        {
            "hc-key": "gh-ep",
            "value": 208323
        },
        {
            "hc-key": "gh-wp",
            "value": 349860
        },
        {
            "hc-key": "gh-cp",
            "value": 148740
        },
        {
            "hc-key": "gh-aa",
            "value": 195950
        },
        {
            "hc-key": "gh-tv",
            "value": 487596
        },
        {
            "hc-key": "gh-np",
            "value": 216053
        },
        {
            "hc-key": "gh-ue",
            "value": 52704
        },
        {
            "hc-key": "gh-uw",
            "value": 12828
        },
        {
            "hc-key": "gh-ba",
            "value": 14016
        }
    ];

//     $('#container')
// <form action="">
// <input type="radio" name="sex" value="male">Male<br>
// <input type="radio" name="sex" value="female">Female
// </form>




    // Initiate the chart
    $('#container_two').highcharts('Map', {

        title : {   
            text : 'Number of Households with Public Toilets'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/gh/gh-all.js">Ghana</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/gh/gh-all'],
            joinBy: 'hc-key',
            name: 'Public Toilets',
            states: {
                hover: {
                    color:'#FF8000'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]

    });
});