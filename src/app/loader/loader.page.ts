import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LoaderPage implements OnInit {


  constructor(private router: Router) { 
    // this.router = router;
    // setTimeout(() => {
    //   this.router.navigate(['/', 'home']);
    // }, 1000);
  }

  ngOnInit() {}
}