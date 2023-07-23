import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { kanji as KANJI } from './kanji-data';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private messageService: MessageService) { }

  kanjiList: Character[] = [];

  addKanji(addedKanji: Character) {
    if (this.kanjiList.includes(addedKanji)) {
      this.kanjiList = this.kanjiList.filter(el => el.New !== addedKanji.New);
    } else {
      this.kanjiList.push(addedKanji);
    }
  }

  getAllKanji(): Observable<Character[]> {
    const kanji = of(KANJI);
    this.messageService.add('KanjiService: fetched kanji');
    return kanji;
  }
}
