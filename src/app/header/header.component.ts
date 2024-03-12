import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private backEndService: BackEndService) {}

  ngOnInit(): void {
    this.onFetch();
  }
  onSave() {
    this.backEndService.saveData();
    alert("Data Saved Successfully!");
    
  }

  onFetch() {
    console.log("fetch called");
    
    this.backEndService.fetchdata();
  }
}
