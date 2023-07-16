import { Character } from './../character';
import { kanji } from './../kanji-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  kanjis = kanji;
  character = kanji[0].New;
  test = 'test';

  selectedCharacter?: Character;
  onSelect(hero: Character): void {
    this.selectedCharacter = hero;
  }
}
