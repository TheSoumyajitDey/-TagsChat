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
  value = "";
  item: string[] = ["Suraj", "Anil", "Anmol", "Praveen"];

  // item: string[] = [
  //   { "Suraj", id: "10" },
  //   { "Anil", id: "15" },
  //   { name: "Anmol", id: "13" },
  //   { name: "Praveen", id: "11" },
  // ];
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
