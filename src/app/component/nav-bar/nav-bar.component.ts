import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoomChat } from 'src/app/model/room/room-chat';
import { RoomChatService } from 'src/app/service/room-chat.service';
import { SocketService } from 'src/app/service/socket.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  roomChatList?: RoomChat[];

  username: String = '';

  constructor(
    private userService: UserService, private router: Router, private elementRef: ElementRef,
    private socketService: SocketService,
    private roomChatService: RoomChatService,
  ) {
  }


  toMainMenu() {
    this.router.navigate(['/main-menu']);
  }


  sendMessage(chatBox: Element) {
    var messageInput = document.querySelector(".chat-input")! as HTMLInputElement;
    var message = messageInput.value;

    if (message.trim() !== "") {
      // Tạo một tin nhắn mới
      var newMessage = document.createElement("div");
      newMessage.classList.add("chat-message", "my-message");

      var messageText = document.createElement("div");
      messageText.classList.add("message-text");
      messageText.textContent = message;
      newMessage.appendChild(messageText);

      var messageTime = document.createElement("div");
      messageTime.classList.add("message-time");
      messageTime.textContent = this.getCurrentTimeString(); // Sử dụng thời gian thực khi gửi tin nhắn
      newMessage.appendChild(messageTime);

      // Thêm tin nhắn mới vào chat-body
      var chatBody = chatBox.querySelector("#chat-body")!;
      chatBody.appendChild(newMessage);

      // Xóa nội dung trong input
      messageInput.value = "";
    }
  }
  handleEnter(event: any, chatBox: Element) {
    if (event.keyCode === 13 || event.which === 13) {
      event.preventDefault();
      this.sendMessage(chatBox);    // TODO: chuyển chatBoxElement vào đây
    }
  }

  ngOnInit(): void {
    this.userService.getPresentUserInfo().subscribe((response: any) => {
      this.username = response.username;
      window.sessionStorage.setItem("username", response.username);
    })
    this.initNavbarMessJs();
    this.initMenuNewMessJs();
    this.socketService.connectNotification();
    this.roomChatService.findAllByPresentUser().subscribe((response: any) => {

    });
  }






















  getCurrentTimeString() {
    var now = new Date();
    var day = now.getDate() as any;
    var month = now.getMonth() + 1 as any; // Lưu ý: getMonth() trả về giá trị từ 0 (tháng 1) đến 11 (tháng 12)
    var year = now.getFullYear() as any;
    var hours = now.getHours() as any;
    var minutes = now.getMinutes() as any;

    // Thêm số 0 phía trước nếu ngày, tháng, giờ hoặc phút chỉ có một chữ số
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
  }


  initNavbarMessJs() {
    const iconMess = document.querySelector('.mess') as HTMLElement;
    const iconNotic = document.querySelector('.notification') as HTMLElement;
    const menuMess = document.getElementById('message-list') as HTMLElement;
    const menuNotification = document.getElementById('notification-list') as HTMLElement;

    iconMess.addEventListener('click', function (event: Event) {
      event.stopPropagation();
      if (menuMess.style.display === '' || menuMess.style.display === 'none') {
        menuMess.style.display = 'block';
        menuNotification.style.display = 'none';
      } else {
        menuMess.style.display = 'none';
      }
    });

    iconNotic.addEventListener('click', function (event: Event) {
      event.stopPropagation();
      if (menuNotification.style.display === '' || menuNotification.style.display === 'none') {
        menuNotification.style.display = 'block';
        menuMess.style.display = 'none';
      } else {
        menuNotification.style.display = 'none';
      }
    });

    function updateUnreadCounts() {
      setTimeout(() => {
        const messageUnreadCount = document.querySelectorAll("#message-list .message-item.unread").length;
        const notificationUnreadCount = document.querySelectorAll("#notification-list .notification-item.unread").length;

        updateBadge("mess", messageUnreadCount);
        updateBadge("notification", notificationUnreadCount);

        sortUnreadMessages();
      }, 100);
    }

    function updateBadge(iconClass: string, count: number) {
      const icon = document.querySelector("." + iconClass) as HTMLElement;
      let notificationBadge = icon.querySelector(".notification-badge") as HTMLElement;

      if (count > 0) {
        if (!notificationBadge) {
          notificationBadge = document.createElement("span");
          notificationBadge.className = "notification-badge";
          icon.appendChild(notificationBadge);
        }
        notificationBadge.textContent = count > 5 ? "5+" : String(count);
        notificationBadge.style.display = "block";
      } else if (notificationBadge) {
        notificationBadge.style.display = "none";
      }
    }

    updateUnreadCounts();

    document.addEventListener("click", function (event: Event) {
      const messageIcon = document.querySelector(".mess") as HTMLElement;
      const notificationIcon = document.querySelector(".notification") as HTMLElement;
      const messageList = document.getElementById("message-list") as HTMLElement;
      const notificationList = document.getElementById("notification-list") as HTMLElement;

      if (
        !messageIcon.contains(event.target as Node) &&
        !notificationIcon.contains(event.target as Node) &&
        !messageList.contains(event.target as Node) &&
        !notificationList.contains(event.target as Node)
      ) {
        messageList.style.display = 'none';
        notificationList.style.display = 'none';
      }
    });

    document.querySelector('.close-chat')!.addEventListener('click', function () {
      document.getElementById('chat-box')!.style.display = 'none';
    });



    // Hàm cập nhật trạng thái của tin nhắn khi ấn vào
    function markAsRead(messageItem: any) {
      messageItem.classList.remove("unread");
      // Chờ một chút để cập nhật trạng thái của tin nhắn trước khi cập nhật số lượng tin nhắn chưa đọc
      setTimeout(() => {
        updateUnreadCounts();
      }, 100);
    }
    document.addEventListener("DOMContentLoaded", function () {
      let openChatBoxes: any[] = [];
      const chatBoxTemplate = document.getElementById("chat-box")!;
      const messageList = document.getElementById("message-list")!;
      const messageItems = messageList.querySelectorAll(".message-item")!;
      let hiddenChatBoxes: any[] = [];
      chatBoxTemplate.style.display = "none";

      function calculateChatBoxPosition(index: any) {
        const chatBoxSpacing = 35;
        return `${(index + 1) * chatBoxSpacing}vh`;
      }

      function updateChatBoxPositions() {
        openChatBoxes.forEach((box, index) => {
          const chatBox = document.getElementById(`chat-box-${box}`)!;
          chatBox.style.right = calculateChatBoxPosition(index);
        });
      }
      function hideFirstOpenChatBox() {
        if (openChatBoxes.length > 0) {
          hideChatBox(openChatBoxes[0]);
          openChatBoxes.shift();
          updateChatBoxPositions();
        }
      }
      function hideChatBox(username: any) {
        const chatBox = document.getElementById(`chat-box-${username}`)!;
        chatBox.style.display = 'none';

        // Xóa bảng chat đã ẩn khỏi danh sách các bảng chat mở
        openChatBoxes = openChatBoxes.filter(box => box !== username);

        // Kiểm tra nếu có bảng chat ẩn được chuyển thành nút avatar-button
        if (hiddenChatBoxes.length > 0) {
          const chatBoxToShow = document.getElementById(`chat-box-${hiddenChatBoxes[0]}`)!;
          chatBoxToShow.style.display = "flex";
          openChatBoxes.push(hiddenChatBoxes[0]);
          hiddenChatBoxes.shift();
          updateChatBoxPositions();
        }

        // Nếu không có bảng chat ẩn, hiển thị nút avatar-button
        if (openChatBoxes.length <= 3 && hiddenChatBoxes.length === 0) {
          const avatarButton = createAvatarButton(username);
          document.body.appendChild(avatarButton);
          avatarButton.classList.remove("hidden");
          updateAvatarButtonPositions();
        }
      }
      function showHiddenChatBox() {
        if (hiddenChatBoxes.length > 0) {
          const chatBoxToShow = document.getElementById(`chat-box-${hiddenChatBoxes[0]}`)!;
          chatBoxToShow.style.display = "flex";
          openChatBoxes.push(hiddenChatBoxes[0]);
          hiddenChatBoxes.shift();
          updateChatBoxPositions();
          // Ẩn nút avatar-button nếu không còn bảng chat nào bị ẩn
          if (hiddenChatBoxes.length === 0) {
            const avatarButton = document.querySelector(".avatar-button:not(.hidden)")!;
            avatarButton.classList.add("hidden");
          }
        }
      }
      function createAvatarButton(username: any) {
        const button = document.createElement('button');
        button.className = 'avatar-button';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = '9999';

        const avatar = document.createElement('img');
        avatar.src = 'anh3/Logo%20Cty%20(Chuan)%20-%20none%20background%201.png'; // Thay đổi đường dẫn này thành đường dẫn đến ảnh đại diện của người dùng
        avatar.style.width = '100%';
        avatar.style.height = '100%';
        avatar.style.borderRadius = '50%';

        const closeButton = document.createElement('span');
        closeButton.className = 'close-avatar-button';
        closeButton.innerHTML = '<i class="fas fa-times"></i>';

        closeButton.addEventListener('click', (event) => {
          event.stopPropagation(); // Ngăn chặn sự kiện click xuyên suốt
          document.body.removeChild(button);
        });

        button.appendChild(avatar);
        button.appendChild(closeButton);

        button.addEventListener('click', () => {
          const chatBox = document.getElementById(`chat-box-${username}`)!;
          chatBox.style.display = 'block';
          document.body.removeChild(button);
          openChatBoxes.push(username);
          if (openChatBoxes.length > 3) {
            hideFirstOpenChatBox();
          }
          updateChatBoxPositions();
        });

        return button;
      }
      messageItems.forEach((item) => {
        if (item.classList.contains("message-item")) {
          item.addEventListener("click", function () {

            // Cập nhật trạng thái tin nhắn khi ấn vào
            markAsRead(item);
            var item2 = item as HTMLElement
            const username = item2.dataset['username']!;
            const avatar = item2.dataset['avatar']!;
            messageList.style.display = 'none';
            menuMess.style.display = 'none';
            let chatBox = document.getElementById(`chat-box-${username}`)!;
            if (!chatBox) {
              chatBox = (chatBoxTemplate.cloneNode(true) as HTMLElement)!;
              chatBox.id = `chat-box-${username}`;
              chatBox.dataset['position'] = openChatBoxes.length + '1'; // Thêm thuộc tính 'data-position' cho mỗi bảng chat
              chatBox.querySelector(".sender-name")!.textContent = username;
              (chatBox.querySelector(".avatar")! as HTMLImageElement).src = avatar;
              const closeChat = chatBox.querySelector(".close-chat");
              updateOnlineStatus(username, chatBox);
              closeChat!.addEventListener("click", function () {
                chatBox.style.display = "none";
                openChatBoxes = openChatBoxes.filter(box => box !== username);
                showHiddenChatBox();
                updateChatBoxPositions();
              });
              document.body.appendChild(chatBox);
              const minimizeButton = chatBox.querySelector('.minimize-button')!;
              minimizeButton.addEventListener('click', () => {
                hideChatBox(username);
              });

            }
            updateOnlineStatus(username, chatBox);

            if (!openChatBoxes.includes(username)) {
              if (openChatBoxes.length >= 3) {
                hideFirstOpenChatBox();
              }
              openChatBoxes.push(username);
              chatBox.style.display = "flex";
            }
            if (openChatBoxes.length > 3) {
              if (hiddenChatBoxes.includes(username)) {
                hiddenChatBoxes = hiddenChatBoxes.filter(box => box !== username);
              } else {
                hiddenChatBoxes.push(openChatBoxes.shift());
              }
            } else {
              // Nếu bảng chat hiện tại không thuộc danh sách bảng chat bị ẩn, thì xóa nó khỏi danh sách
              if (hiddenChatBoxes.includes(username)) {
                hiddenChatBoxes = hiddenChatBoxes.filter(box => box !== username);
              }
            }
            updateChatBoxPositions();
          });
        }
      });

    });
    function sortUnreadMessages() {
      const messageList = document.getElementById("message-list")!;
      const messageItems = Array.from(messageList.querySelectorAll(".message-item"));

      messageItems.sort((a, b) => {
        if (a.classList.contains("unread") && !b.classList.contains("unread")) {
          return -1;
        }
        if (!a.classList.contains("unread") && b.classList.contains("unread")) {
          return 1;
        }
        return 0;
      });

      messageItems.forEach(item => {
        messageList.appendChild(item);
      });
    }
    function updateOnlineStatus(username: any, chatBox: Element) {
      const messageItem = document.querySelector(`.message-item[data-username="${username}"]`)!;
      const onlineStatus = messageItem.querySelector(".online-status")!;
      const chatBoxOnlineStatus = chatBox.querySelector(".online-status")!;

      if (onlineStatus) {
        chatBoxOnlineStatus.classList.add("online");
        chatBoxOnlineStatus.innerHTML = '<span class="online-text">Online</span>';
      } else {
        chatBoxOnlineStatus.classList.remove("online");
        chatBoxOnlineStatus.classList.add("offline");
      }
    }
    function updateAvatarButtonPositions() {
      const avatarButtons = document.querySelectorAll('.avatar-button:not(.hidden)');
      const avatarButtonHeight = 50; // Chiều cao của avatar-button, bạn có thể thay đổi giá trị này
      const avatarButtonSpacing = 16; // Khoảng cách giữa các avatar-button, bạn có thể thay đổi giá trị này

      avatarButtons.forEach((avatarButton, index) => {
        const offset = (index + 1) * (avatarButtonHeight + avatarButtonSpacing);
        (avatarButton as HTMLElement).style.bottom = `${offset}px`;
      });
    }
  }

  initMenuNewMessJs() {
    const nutBanBe = document.querySelector('.icon-primary')!;
    const newMess = document.querySelector('.icon-secondary')!;
    const danhSachBanBe = document.querySelector('.friends-list')! as HTMLElement;
    const newList = document.querySelector('.new-mess')! as HTMLElement;
    const cacMucBanBe = document.querySelectorAll('.friend')!;

    const personalTab = document.getElementById('personal-tab')!;
    const groupTab = document.getElementById('group-tab')!;
    const personalContent = document.getElementById('personal-content')!;
    const groupContent = document.getElementById('group-content')!;

    personalTab.addEventListener('click', function () {
      if (!personalTab.classList.contains('active')) {
        personalTab.classList.add('active');
        groupTab.classList.remove('active');
        personalContent.classList.add('active');
        groupContent.classList.remove('active');
      }
    });

    groupTab.addEventListener('click', function () {
      if (!groupTab.classList.contains('active')) {
        groupTab.classList.add('active');
        personalTab.classList.remove('active');
        groupContent.classList.add('active');
        personalContent.classList.remove('active');
      }
    });

    nutBanBe.addEventListener('click', function (event) {
      event.stopPropagation();
      if (danhSachBanBe.style.display === '' || danhSachBanBe.style.display === 'none') {
        danhSachBanBe.style.display = 'block';
        newList.style.display = 'none';
      } else {
        danhSachBanBe.style.display = 'none';
      }
    });

    danhSachBanBe.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    newMess.addEventListener('click', function (event) {
      event.stopPropagation();
      if (newList.style.display === '' || newList.style.display === 'none') {
        newList.style.display = 'block';
        danhSachBanBe.style.display = 'none';
      } else {
        newList.style.display = 'none';
      }
    });
    newList.addEventListener('click', function (event) {
      event.stopPropagation();
    });


    cacMucBanBe.forEach((banBe) => {
      banBe.addEventListener('click', () => {
        // Lấy tên và trạng thái của bạn bè được click
        const ten = banBe.querySelector('.friend-name')!.textContent;
        const trangThai = banBe.querySelector('.friend-status')!.classList.contains('online') ? 'online' : 'offline';

        // Xóa trạng thái cũ (nếu có)
        const trangThaiCu = document.querySelector('.chat-header .online, .chat-header .offline');
        if (trangThaiCu) {
          trangThaiCu.remove();
        }

        // Hiển thị trạng thái online hoặc offline dưới tên người dùng
        const trangThaiNguoiNhan = document.createElement('span');
        trangThaiNguoiNhan.textContent = trangThai === 'online' ? 'trực tuyến' : 'ngoại tuyến';
        trangThaiNguoiNhan.className = trangThai;
        trangThaiNguoiNhan.style.marginLeft = '5px';
      });
    });
    const cacNhom = document.querySelectorAll('.group');

    cacNhom.forEach(function (nhom) {
      const soThanhVienOnline = (nhom.querySelector('.group-info .group-number')! as HTMLElement).dataset['membersOnline']!;
      const trangThaiNhom = nhom.querySelector('.group-status')!;

      if (soThanhVienOnline > '0') {
        trangThaiNhom.classList.add('online');
      } else {
        trangThaiNhom.classList.add('offline');
      }
    });
    document.addEventListener('click', function () {
      danhSachBanBe.style.display = 'none';
    });

    const searchInput = document.getElementById("search-input-new")!;
    const friendList = document.getElementById("friend-list-new")!;

    searchInput.addEventListener("keyup", (e) => {
      const searchTerm = (e.target! as HTMLInputElement).value.toLowerCase();
      const friends = friendList.querySelectorAll(".friend-new");

      friendList.style.display = searchTerm.length > 0 ? "block" : "none";

      friends.forEach((friend) => {
        const friendName = friend.textContent!.toLowerCase();
        (friend as HTMLElement).style.display = friendName.includes(searchTerm) ? "block" : "none";
      });
    });

  }
}
