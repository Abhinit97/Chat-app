import { Component, OnInit, DoCheck } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'shyam',
  templateUrl: './shyam.component.html',
  styleUrls: ['./shyam.component.css']
})
export class ShyamComponent implements OnInit ,DoCheck {
  
  
  messages;

  constructor(private cs : ChatService) { }

  ngOnInit() {
  }

  sendMessage(msg)
  {
    this.cs.chatting("Shyam : " +msg);
  }

  ngDoCheck(): void {
    this.messages= this.cs.getAllMessages();
  }
}
