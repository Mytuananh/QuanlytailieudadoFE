import { Component } from '@angular/core';
import { StompRService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: string[] = [];
  newMessage = '';

  constructor(private stompService: StompRService) {
    this.stompService.subscribe('/topic/chat').subscribe((message) => {
      this.messages.push(message.body);
    });
  }

  sendMessage() {
    this.stompService.publish('/app/chat', this.newMessage);
    this.newMessage = '';
  }
}
