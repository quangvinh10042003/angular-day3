import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product = [
    {ten:'Sản Phẩm 1',gia:1000,img:'https://thuvienmuasam.com/uploads/default/original/2X/e/ebace14de8c553f414a830be6bb2b3c13a1194e6.jpeg'},
    {ten:'Sản Phẩm 2',gia:2000,img:'https://khanhyenshop.com/wp-content/uploads/2019/09/5-e1016.jpg'},
    {ten:'Sản Phẩm 3',gia:69000,img:'https://cf.shopee.vn/file/7e0dcd375bf42097fda835f57be98ab7'},
  ];
  
  constructor() {
  
  }
  ngOnInit(): void {
  }

}
