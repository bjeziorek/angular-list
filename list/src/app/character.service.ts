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

  getKanji(): Observable<Character[]>{
    const kanji = of(KANJI);
    this.messageService.add('HeroService: fetched heroes');
    return kanji;
  }
}
