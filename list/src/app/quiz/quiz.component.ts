import { CharacterService } from './../character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  currentCharacter = 0;
  display = {
    New: true,
    English_meaning: true,
    Readings_kana: true,
    Readings_romaji: true
  }

  constructor(public characterService: CharacterService) { }

  onShowHide = (what:"New"|"English_meaning"|"Readings_kana"|"Readings_romaji") => {
    this.display[what] = !this.display[what];
  }

  onNext = () => {
    console.log('dsds')
    this.currentCharacter = (this.currentCharacter + 1) % this.characterService.kanjiList.length
  }

  onPrev = () => {
    this.currentCharacter = this.currentCharacter===0
    ? this.characterService.kanjiList.length - 1
    : this.currentCharacter - 1
  }
}
