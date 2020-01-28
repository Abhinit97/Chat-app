import { Component, OnInit, DoCheck } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'ghanshyam',
  templateUrl: './ghanshyam.component.html',
  styleUrls: ['./ghanshyam.component.css']
})
export class GhanshyamComponent implements OnInit ,DoCheck {

  messages;

  constructor(private cs:ChatService) { }

  ngOnInit() {
  }
  sendMessage(msg){
    this.messages=this.cs.chatting("Ghanshyam : " +msg);
  }
  ngDoCheck(): void {
    this.messages = this.cs.getAllMessages();
  }
}
