import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detailPage',
  templateUrl: './detailPage.component.html',
  styleUrls: ['./detailPage.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // hier DB-Abfrage hinterlegen
    // tslint:disable-next-line: no-string-literal
    console.log(this.route.snapshot.params['id']); // Bsp zum loggen der ID
  }

}
