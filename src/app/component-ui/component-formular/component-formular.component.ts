import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-formular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-formular.component.html',
  styleUrl: './component-formular.component.scss'
})
export class ComponentFormularComponent {
  showForm = true;
  resultHtml = '';

  displayData(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const anrede = (form.elements.namedItem('anrede') as HTMLInputElement).value;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const telefonnummer = (form.elements.namedItem('telefonnumer') as HTMLInputElement).value;
   
    this.resultHtml = `
      <table>
        <tr>
          <th width="150px" height="100px" text-align="left">Geschlecht:</th>
          <td width="300px">${anrede}</td>
        </tr>
        <tr>
          <th width="150px" height="100px" text-align="left">Name:</th>
          <td width="300px">${name}</td>
        </tr>
        <tr>
          <th width="150px" height="100px" text-align="left">Email:</th>
          <td width="300px">${email}</td>
        </tr>
        <tr>
          <th width="150px" height="100px" text-align="left">Telefonnummer:</th>
          <td width="300px">${telefonnummer}</td>
        </tr>
      </table>
    `;

    
    this.showForm = false;
  
  }
}

