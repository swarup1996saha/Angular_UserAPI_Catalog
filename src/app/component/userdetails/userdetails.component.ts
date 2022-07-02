import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as leaflet from 'leaflet';
import { Coordinates } from 'src/app/interface/coordinates.interface';
// import { Response } from 'src/app/interface/response.interface';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  // response :Response
  user: User
  mode:'edit' | 'locked' = 'locked'
  buttonText: 'Edit' | 'Save Changes' = 'Edit'

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    //   this.userService.getUser(params.get('uuid')!).subscribe((res:any)=>{
    //     console.log(res);
    //     this.response=res
    //   })
    // })
    this.user=(<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]))
    console.log(this.user);
    // this.loadMap(this.user.coordinates)
  }
  changeMode(mode?: 'edit' | 'locked'):void{
    console.log(mode);
    this.mode =this.mode ==='locked' ? 'edit' : 'locked'
    this.buttonText = this.buttonText ==='Edit' ? 'Save Changes' : 'Edit'
    if(mode==='edit'){
      // logic to update the user in the backend
      console.log('Upading User on the Back end');

    }
  }
  // private loadMap(coordinates: Coordinates):void{
  //   const map = leaflet.map('map',{
  //     center: [coordinates.latitude, coordinates.longitude],
  //     zoom: 8
  //   })
  //   const mainLayer = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  //     tileSize:512,
  //     zoomOffset: -1,
  //     minZoom:1,
  //     maxZoom:30,
  //     crossOrigin:true,
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   })
  //   mainLayer.addTo(map);

  // }
}
