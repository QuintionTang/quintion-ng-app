import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityid: string = "101280601";
  city: string = "深圳";
  op_city: string = "";
  op_region: string = "";
  op_country: string = "";
  op_data: string = "";
  op_today: string = "";
  constructor(public _sharedService: SharedService) {}

  ngOnInit() {}

  callWeatherService() {
    this._sharedService.findWeather(this.cityid, this.city).subscribe(
      lstresult => {
        this.op_city = lstresult["city"];
        this.op_country = lstresult["country"];
        this.op_data = lstresult;
        this.op_today = [lstresult["wea"],[lstresult["tem2"],"-",lstresult["tem1"],"℃"].join("")].join(" ");
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      }
    );
  }
}
