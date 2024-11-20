import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  private initialStyle: string | null = null;

  setInitialStyle(style: string) {
    if (!this.initialStyle) {
      this.initialStyle = style;
    }
  }

  hasStyleConflict(style: string) {
    return this.initialStyle && this.initialStyle !== style;
  }

  resetStyle() {
    this.initialStyle = null;
  }
}
