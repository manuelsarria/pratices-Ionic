import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
