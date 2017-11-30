import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-cards',
  templateUrl: './homepage-cards.component.html',
  styleUrls: ['./homepage-cards.component.css']
})
export class HomepageCardsComponent implements OnInit {

  private currentWidth: number;

  constructor() {

   }

  cardMouseEnter = function(item) {
    let targetItem = item.srcElement;

    targetItem.children[0].style.height = '0%';
    targetItem.children[0].style.display = 'inline';
    let currentWidth = 0;

    let openOverlay = setInterval(function() {
        if (currentWidth < 98) {
          currentWidth += 1;
          targetItem.children[0].style.height = currentWidth + '%';
          console.log(targetItem.children[0].style.height);
        } else if (currentWidth === 98) {
          targetItem.children[1].style.display = 'flex';
          clearInterval(openOverlay);
          return;
        }
      }, 0.3);
  };

  cardMouseLeave = function(item) {
    let targetItem = item.srcElement;

    targetItem.children[0].style.height = '98%';
    targetItem.children[1].style.display = 'none';

    let currentWidth = 98;

      let openOverlay = setInterval(function() {
        if (currentWidth > 0) {
          currentWidth -= 1;
          targetItem.children[0].style.height = currentWidth + '%';
        } else if (currentWidth === 0) {
          clearInterval(openOverlay);
          return;
        }
      }, 0.3);
  };

  ngOnInit() {
  }

}
