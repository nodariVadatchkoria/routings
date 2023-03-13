import {Component, OnInit} from '@angular/core';
import {
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faTextSlash,
  faUnderline,
  faItalic,
  faBold,
} from '@fortawesome/free-solid-svg-icons';
import {NgStyle} from "@angular/common";
import {Observable, of, Subject} from "rxjs";
import {style} from "@angular/animations";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  faAlignLeft = faAlignLeft;
  faAlignCenter = faAlignCenter;
  faAlignRight = faAlignRight;
  faTextSlash = faTextSlash;
  faUnderline = faUnderline;
  faItalic = faItalic;
  faBold = faBold;

  constructor() {
  }



  //  f8(e:any) {
  //    if (this.textarea.style.textTransform == "uppercase") {
  //      this.textarea.style.textTransform = "none";
  //      e.classList.remove("active");
  //    }
  //    else {
  //      this.textarea.style.textTransform = "uppercase";
  //      e.classList.add("active");
  //    }
  //  }
  //  f9() {
  //    this.textarea.style.fontWeight = "normal";
  //    this.textarea.style.textAlign = "left";
  //    this.textarea.style.fontStyle = "normal";
  //    this.textarea.style.textTransform = "capitalize";
  //    this.textarea.value = "";
  //  }
  //  f10(e:any) {
  //     let value= e.value;
  //    this.textarea.style.color = value;
  //  }
//   window.addEventListener('load', (
//
// ) => {
//  this.textarea = "";
// });
//
//
//
//   window.addEventListener('load', () => {
//   this.textarea.value = "";
// });
  bold: boolean = false;
  italic: boolean = false;
  underline: boolean = false;
  alignleft: boolean = false;
  aligncenter: boolean = false;
  alignright: boolean = false;

  fontsize11 :any = 16;


  changeFontWeight() {
    this.bold = !this.bold;
  }

  changeFontWeight2() {
    this.italic = !this.italic;

  }

  changeFontWeight3() {
    this.underline = !this.underline;

  }

  ngOnInit(): void {

  }


  fontSizeChange() {
    let fontSize = document.getElementById("fontSize") as HTMLInputElement;
    let fontSizeValue = fontSize.value;
    this.fontsize11 = fontSizeValue + "px";
localStorage.setItem("fontsize", this.fontsize11);

  }


  alignLeft() {

    this.alignleft = !this.alignleft;
  }

  alignCenter() {
    this.aligncenter = !this.aligncenter;
  }

  alignRight() {
    this.alignright = !this.alignright;
  }

  aA() {

  }

  capitalize() {

  }

  color() {

  }
}
