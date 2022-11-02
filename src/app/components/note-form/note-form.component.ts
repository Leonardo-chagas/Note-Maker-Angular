import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from 'src/app/Notes';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Output() onAddNote: EventEmitter<Notes> = new EventEmitter()
  title!: string
  text!: string

  constructor() { }

  ngOnInit(): void {
  }

  OnAddnote() {

  }

}
