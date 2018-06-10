import { Component, OnInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { PopulationService } from "../population/population.service";
import { Router } from '@angular/router';
//var Highcharts = require('highcharts');

// Load module after Highcharts is loaded

// require('highcharts/modules/exporting')(Highcharts);
import * as Drilldown from 'highcharts/modules/drilldown.src';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  population_result:any
  errorMsg:any;
  allSeries:any
  series:any;
  drillSeries:any;
  constructor(private populationService: PopulationService,private router: Router,) { 
// Create the chart
Drilldown(Highcharts);


  }

  ngOnInit() {
    this.convertData()
    this.loadChart();
  
  }
  convertData(){
    this.population_result= [{"year":2010,"total":579,"male":613,"female":1192},{"year":2011,"total":588,"male":623,"female":1211},{"year":2012,"total":599,"male":634,"female":1233},{"year":2013,"total":607,"male":643,"female":1250},{"year":2014,"total":616,"male":650,"female":1266},{"year":2015,"total":624,"male":658,"female":1282},{"year":2017,"total":640,"male":676,"female":1316},{"year":2018,"total":648,"male":686,"female":1334}];
    this.series={
      name:'Population',
      data:[]
    }
    this.drillSeries=[]
    this.population_result.forEach(element => {
      var sElement={
        name:element.year+"",
        y:element.total,
        drilldown: element.year+""
      }
      this.series.data.push(sElement);
      var dElement ={
        name:element.year+"",
        id:element.year+"",
        "data": [
            [
                "Male",
                element.male
            ],
            [
              "Female",
              element.female

            ]
          ]
      }
      this.drillSeries.push(dElement);
    });
    this.allSeries=[]
    this.allSeries.push(this.series);
  }
  getData(){

    console.log("HOME COMP")
    this.populationService.getPopulation().
    subscribe(data => this.population_result = data,
    error => this.errorMsg = error);
  }

  loadChart(){
  
  Highcharts.chart('chart-div', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Population'
    },
    subtitle: {
        text: 'Yearly'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Count'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },

    "series": this.allSeries,
    "drilldown": {
        "series": this.drillSeries
    }
});
  }

  public logMeOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
