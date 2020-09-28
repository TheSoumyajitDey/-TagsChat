import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-chatbar",
  templateUrl: "./chatbar.component.html",
  styleUrls: ["./chatbar.component.scss"],
})
export class ChatbarComponent implements OnInit {
  chat: string;
  chats: any[] = [];
  items: string[] = ["Noah", "Liam", "Mason", "Jacob"];
  values = "";
  isVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.isVisible = false;
  }

  onChatAdded() {
    this.chats.push(this.chat);
    this.chat = "";
  }

  onKey(event: KeyboardEvent) {
    if (
      (event.target as HTMLInputElement).value.charAt(
        (event.target as HTMLInputElement).value.length - 1
      ) == "@"
    ) {
      console.log("@ working ");
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
