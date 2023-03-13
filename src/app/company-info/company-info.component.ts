import { Component, OnInit } from '@angular/core';
import {faAlignLeft, faAlignCenter, faAlignRight, faTextSlash, faUnderline, faItalic, faBold,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  faAlignLeft = faAlignLeft;
  faAlignCenter = faAlignCenter;
  faAlignRight = faAlignRight;
  faTextSlash = faTextSlash;
  faUnderline = faUnderline;
  faItalic = faItalic;
  faBold = faBold;
  constructor() { }

  ngOnInit(): void {
  }
  textarea:any = document.getElementById("textarea1");
  e:any = document.getElementById("f8");
  f1(e:any) {
    const value = e.value;
    this.textarea.style.fontSize = value + "px";
  }
  f2(e:any) {
    if (this.textarea.style.fontWeight == "bold") {
      this.textarea.style.fontWeight = "normal";
      e.classList.remove("active");
    }
    else {
      this.textarea.style.fontWeight = "bold";
      e.classList.add("active");
    }
  }
 f3(e:any) {
    if (this.textarea.style.fontStyle == "italic") {
      this.textarea.style.fontStyle = "normal";
      e.classList.remove("active");
    }
    else {
      this.textarea.style.fontStyle = "italic";
      e.classList.add("active");
    }
  }
  f4(e:any) {
    if (this.textarea.style.textDecoration == "underline") {
      this.textarea.style.textDecoration = "none";
      e.classList.remove("active");
    }
    else {
      this.textarea.style.textDecoration = "underline";
      e.classList.add("active");
    }
  }
  f5(e:any) {
    this.textarea.style.textAlign = "left";
  }
  f6(e:any) {
    this.textarea.style.textAlign = "center";
  }
  f7(e:any) {
    this.textarea.style.textAlign = "right";
  }
  f8(e:any) {
    if (this.textarea.style.textTransform == "uppercase") {
      this.textarea.style.textTransform = "none";
      this.e.classList.remove("active");
    }
    else {
      this.textarea.style.textTransform = "uppercase";
      this.e.classList.add("active");
    }
  }
  f9() {
    this.textarea.style.fontWeight = "normal";
    this.textarea.style.textAlign = "left";
    this.textarea.style.fontStyle = "normal";
    this.textarea.style.textTransform = "capitalize";
    this.textarea.value = "";
  }
//   f10(e:any) {
//     let value:any | undefined = e.value;
//     this.textarea.style.color = value;
//   }
//   window.addEventListener('load', (
//
// ) => {
//  this.textarea = "";
// });



//   window.addEventListener('load', () => {
//   this.textarea.value = "";
// });

}
