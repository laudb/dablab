$(document).ready(function () {


$(function () {
// [{"Housing Facilities":"KVIP","Number":572.824,"Western":34.822,"Central":62.088,"Greater Accra":148.794,"Volta":63.237,"Eastern":100.193,"Ashanti":98.434,"Brong Ahafo":39.544,"Northern":14.587,"Upper East":6.196,"Upper West":4.929}]
    // Prepare demo data
    // var mydata = JSON.parse(openDefData);
    console.log(openDefData);

}

for (var s in openDefData){
    console.log(opDefData[s] + "working");
}

    var data = [
        {
            "hc-key": "gh-ah",
            "value": 98434
        },
        {
            "hc-key": "gh-ep",
            "value": 100193
        },
        {
            "hc-key": "gh-wp",
            "value": 34822
        },
        {
            "hc-key": "gh-cp",
            "value": 62088
        },
        {
            "hc-key": "gh-aa",
            "value": 148794
        },
        {
            "hc-key": "gh-tv",
            "value": 63237
        },
        {
            "hc-key": "gh-np",
            "value": 14587
        },
        {
            "hc-key": "gh-ue",
            "value": 6196
        },
        {
            "hc-key": "gh-uw",
            "value": 4929
        },
        {
            "hc-key": "gh-ba",
            "value": 39544
        }
    ];

//     $('#container')
// <form action="">
// <input type="radio" name="sex" value="male">Male<br>
// <input type="radio" name="sex" value="female">Female
// </form>




    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Number of Households with the selected lavatory '
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
            name: 'KVIP',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]

    });
});

)}