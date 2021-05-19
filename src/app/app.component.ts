import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  length = 0;

  onLengthChange(val: string): void {
    this.length = parseInt(val);
  }

  onButtonClick() {
    console.log(`
      Preparing to generate a password with the following criteria:
      Includes Letters: ${this.includeLetters}
      Includes Numbers: ${this.includeNumbers}
      Includes Symbols: ${this.includeSymbols}
      Length: ${this.length}
    `);

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()-+';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generated = '';

    for (let i = 0; i < this.length; i++) {
      const rand = Math.floor(Math.random() * validChars.length);
      generated += validChars[rand];
    }

    this.password = generated;
  }

  onLettersClick() {
    this.includeLetters = !this.includeLetters;
  }

  onNumbersClick() {
    this.includeNumbers = !this.includeNumbers;
  }

  onSymbolsClick() {
    this.includeSymbols = !this.includeSymbols;
  }

  getPassword() {
    return this.password;
  }
}
