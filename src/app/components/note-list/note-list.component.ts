import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Notes } from 'src/app/Notes';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Notes[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.GetNotes().subscribe((notes) => this.notes = notes);
  }

}
