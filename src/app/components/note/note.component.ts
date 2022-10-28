import { Component, OnInit, Input } from '@angular/core';
import { Notes } from 'src/app/Notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note!: Notes;

  constructor() { }

  ngOnInit(): void {
  }

}
