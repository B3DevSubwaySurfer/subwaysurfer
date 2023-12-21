import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../../../services/app.service";
import { StationClasse} from "../../../classes/station.classe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public appService: AppService, private router: Router) {}

  getStationPosition(index: number, arrayLength: number): string {
    return (index / (arrayLength - 1)) * 100 + '%';
  }

  onSelectStation(station: StationClasse): void {
    this.router.navigate(['/preview'], { queryParams: { stationName: station.name } });
  }
}
