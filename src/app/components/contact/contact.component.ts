import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery'
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    $("#logo").on("click", function(e: { preventDefault: () => void; }){
      e.preventDefault();

      $("header").css("background","green")
                 .css("height","50px");

    });

    $("#texto").on("click", function(){
      $("#texto").css("background", "red")
    });

    // SLIDER JQUERY 

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 800
    });
    
  }
}
