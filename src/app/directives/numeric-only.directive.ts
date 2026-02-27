import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]',
  standalone: true
})
export class NumericOnlyDirective {

  @HostListener('keydown', ['$event'])                                            // Control the key press
  onKeyDown(event: KeyboardEvent) {

    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete'
    ];

    if (allowedKeys.includes(event.key)) {
      return;
    }

    if (!/^\d$/.test(event.key)) {                                      // Only Allow digits
      event.preventDefault();
    }
  }

  
  @HostListener('paste', ['$event'])                                    // controlling the paste behaviour
  onPaste(event: ClipboardEvent) {
    const pasteData = event.clipboardData?.getData('text');

    if (pasteData && !/^\d+$/.test(pasteData)) {
      event.preventDefault();
    } 
  }
}