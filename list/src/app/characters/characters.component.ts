import { Character } from './../character';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CharacterService } from '../character.service';
import { MessageService } from '../message.service';
import gsap from 'gsap';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent/* implements OnInit */{
  kanjis: Character[] = [];
  selectedCharacter?: Character;
  test = 'test'
  @ViewChildren('btns')
  btns!: QueryList<ElementRef>;

  hoveredKanji: Character | null = null;

  English_meaning = ''

  constructor(private characterService: CharacterService, private messageService: MessageService) { }
  

  ngOnInit(): void {
    this.getKanjis()
  }

  getKanjis(): void {
    this.characterService.getKanji()
        .subscribe(kanji => this.kanjis = kanji);
  }
 
  onSelect(character: Character): void {
    this.selectedCharacter = character;
    this.messageService.add(`HeroesComponent: Selected hero id=${character.New}`);
  }

  setInnerHTMLMeaning(id:string){
    if(id===this.hoveredKanji?.nr){
      return this.hoveredKanji?.English_meaning
    }
    return;
  }
  setInnerHTMLReading(id:string){
    if(id===this.hoveredKanji?.nr){
      return this.hoveredKanji?.Readings_kana
    }
    return;
  }
  setInnerHTMLGrade(id:string){
    if(id===this.hoveredKanji?.nr){
      return 'Grade: '+ this.hoveredKanji?.Grade
    }
    return;
  }
  setInnerHTMLStrokes(id:string){
    if(id===this.hoveredKanji?.nr){
      return 'Strokes: '+ this.hoveredKanji?.Strokes
    }
    return;
  }

  onMouseEnter(kan:Character):void{
    this.hoveredKanji=kan;
    this.English_meaning=kan.English_meaning
    const btnArr: Element[] = this.btns.map(btn => btn.nativeElement)
    console.log('gfgfhg',btnArr)
    gsap.to(`.btn`,{zIndex:2, scale:0})
    gsap.to(`.details`,{zIndex:2, scale:0})
    gsap.to(`.details${kan.nr}`,{zIndex:2, scale:1})
    gsap.to(`.btn${kan.nr}`,{zIndex:2, scale:2})
  }
  onMouseLeave(kan:Character):void{
    this.hoveredKanji=null;
    this.English_meaning=''
    const btnArr: Element[] = this.btns.map(btn => btn.nativeElement)
    console.log('gfgfhg',btnArr)
    gsap.to(`.btn`,{zIndex:1, scale:1})
    gsap.to(`.details`,{zIndex:2, scale:0})
    gsap.to(`.btn${kan.nr}`,{zIndex:1, scale:1})
  }
}
