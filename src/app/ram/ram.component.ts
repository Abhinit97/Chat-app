import { Component, OnInit, DoCheck } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit ,DoCheck {

  messages;

  constructor(private cs:ChatService) { }

  ngOnInit() {
  }
  sendMessage(msg){
    this.messages=this.cs.chatting("Ram : " +msg);
  }
  ngDoCheck(): void {
    this.messages = this.cs.getAllMessages();
  }
}
