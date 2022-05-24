import React from "react";

import HighchartsReact from "highcharts-react-official";

// Import Highcharts
import Highcharts from "highcharts/highmaps";

// Load Highcharts modules

import HighchartsExporting from 'highcharts/modules/exporting'

// map loaded
import Map from "@highcharts/map-collection/countries/ng/ng-all.geo.json";


if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts)
}

const HighMaps = () => {
    const data = [
        ['ng-ri', 10], ['ng-kt', 11], ['ng-so', 12], ['ng-za', 13],
        ['ng-yo', 14], ['ng-ke', 15], ['ng-ad', 16], ['ng-bo', 17],
        ['ng-ak', 18], ['ng-ab', 19], ['ng-im', 20], ['ng-by', 21],
        ['ng-be', 22], ['ng-cr', 23], ['ng-ta', 24], ['ng-kw', 25],
        ['ng-la', 26], ['ng-ni', 27], ['ng-fc', 28], ['ng-og', 29],
        ['ng-on', 30], ['ng-ek', 31], ['ng-os', 32], ['ng-oy', 33],
        ['ng-an', 34], ['ng-ba', 35], ['ng-go', 36], ['ng-de', 37],
        ['ng-ed', 38], ['ng-en', 39], ['ng-eb', 40], ['ng-kd', 41],
        ['ng-ko', 42], ['ng-pl', 43], ['ng-na', 44], ['ng-ji', 45],
        ['ng-kn', 46]
    ];



    const options: Highcharts.Options = {
        title: {
            text: undefined,
        },
        subtitle: {
            text: undefined
        },
        chart: {
            map: Map,
            displayErrors: false,
            height: "70%",

        },
        series: [{
            data: data,
            states: {
                hover: {
                    color: '#BADA55'
                },
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                color: "#FFFFFF",
            },
        }],

        colorAxis: {
            min: 0
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
    }

    return (
        <div className="shadow">
            <HighchartsReact highcharts={Highcharts} options={options} constructorType={'mapChart'} />
        </div>
    )
}

export default HighMaps;