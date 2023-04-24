import { AfterViewChecked, Component, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Messaggio } from '../model/messaggio';
import { User } from '../model/user';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable,  of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompatClient } from '@stomp/stompjs';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit, AfterViewChecked {

  url = 'http://localhost:8080';
  otherUser?: User;
  thisUser: User = JSON.parse(sessionStorage.getItem('user')!);
  channelName?: string;
  socket?: WebSocket;
  stompClient?: CompatClient;
  newMessage = new FormControl('');
  messages?: Observable<Array<Messaggio>>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private http:HttpClient,
    private el: ElementRef) {}


  ngOnInit(): void {
    this.userService
      .getUserByNickname(this.route.snapshot.paramMap.get('user')!)
      .subscribe((data: any) => {
        this.otherUser = data;
        // this.otherUser.propic = "data:image/jpeg;base64,"+ this.otherUser.propic;
        this.connectToChat();
        console.log(this.el)
        this.el.nativeElement.querySelector("#chat").scrollIntoView();
      });
  }

  ngAfterViewChecked(): void {
    this.scrollDown();
  }

  scrollDown(){
    var container = this.el.nativeElement.querySelector("#chat");
    container.scrollTop = container.scrollHeight;
  }

  connectToChat() {
    const id1 = this.thisUser.id!;
    const nick1 = this.thisUser.name;
    const id2 = this.otherUser?.id!;
    const nick2 = this.otherUser?.name!;

    if (id1 > id2) {
      this.channelName = nick1 + '&' + nick2;
    } else {
      this.channelName = nick2 + '&' + nick1;
    }
    this.loadChat();
    console.log('connecting to chat...');
    this.socket = new SockJS(this.url + '/chat');
    this.stompClient = Stomp.Stomp.over(this.socket);

    this.stompClient.connect({}, (frame: any) => {
      //func = what to do when connection is established
      console.log('connected to: ' + frame);
      this.stompClient!.subscribe(
        '/topic/messages/' + this.channelName,
        (response) => {
          //func = what to do when client receives data (messages)
          this.loadChat();
        }
      );
    });
  }

  sendMsg() {
    if (this.newMessage.value !== '') {
      this.stompClient!.send(
        '/app/chat/' + this.channelName,
        {},
        JSON.stringify({
          sender: this.thisUser.name,
          t_stamp: 'to be defined in server',
          content: this.newMessage.value,
        })
      );
      this.newMessage.setValue('');
    }
  }

  loadChat(){
    this.messages = this.http.post<Array<Messaggio>>(this.url+'/getMessages' ,  this.channelName);
    this.messages.subscribe(data => {
      let mgs:Array<Messaggio> = data;
      mgs.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.messages = of(mgs);
    })
    console.log(this.messages);
  }

  whenWasItPublished(myTimeStamp: string) {
    const endDate = myTimeStamp.indexOf('-');
    return (
      myTimeStamp.substring(0, endDate) +
      ' at ' +
      myTimeStamp.substring(endDate + 1)
    );
  }

}
