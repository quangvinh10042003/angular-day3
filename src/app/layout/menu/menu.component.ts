import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navItems = [
    {tenNAV:"Loại 1", soLuong:100},
    {tenNAV:"Loại 2", soLuong:10},
    {tenNAV:"Loại 3", soLuong:200},
    {tenNAV:"Loại 4", soLuong:500},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
