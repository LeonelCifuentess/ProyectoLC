import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Home,Contact,Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectonuevo');
}
