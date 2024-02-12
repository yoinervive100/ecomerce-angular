import { Component} from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent,FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   carts = [
    {
      id:1,
      name: "pro headphones",
      precio: "$400",
      URL: "/assets/img/image-home/auri-1.png"
    },
    {
      id:2,
      name: "diadem",
      precio: "$560",
      URL: "/assets/img/image-home/auri-2.png"
    },
    {
      id:3,
      name: "xiaomi headband",
      precio: "$790",
      URL: "/assets/img/image-home/auri-3.png"
    },
    {
      id:4,
      name: "sony",
      precio: "$400",
      URL: "/assets/img/image-home/auri-4.png"
    },
    {
      id:5,
      name: "diadem",
      precio: "$560",
      URL: "/assets/img/image-home/auri-5.png"
    },
    {
      id:6,
      name: "xiaomi headband",
      precio: "$790",
      URL: "/assets/img/image-home/auri-6.png"
    },
    {
      id:7,
      name: "xiaomi headband",
      precio: "$790",
      URL: "/assets/img/image-home/auri-7.png"
    },
    {
      id:8,
      name: "pro headphones",
      precio: "$400",
      URL: "/assets/img/image-home/auri-8.png"
    },
    {
      id:9,
      name: "diadem",
      precio: "$60",
      URL: "/assets/img/image-home/auri-9.png"
    },
    {
      id:10,
      name: "diadem",
      precio: "$60",
      URL: "/assets/img/image-home/auri-6.png"
    },
    {
      id:11,
      name: "diadem",
      precio: "$560",
      URL: "/assets/img/image-home/auri-5.png"
    },
    {
      id:12,
      name: "sony",
      precio: "$400",
      URL: "/assets/img/image-home/auri-4.png"
    }

  ];
}
