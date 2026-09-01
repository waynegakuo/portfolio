import { Component } from '@angular/core';
import { SITE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
