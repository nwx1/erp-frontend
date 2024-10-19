import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  company: any;
  mychart: any;
  constructor() {

  }
  ngOnInit() {
    this.company = [
      { name: 'Skynet', desc: 'Warfare', date: '2025', status: 'pending' },
      { name: 'Genesis', desc: 'AI', date: '2025', status: 'pending' },
      { name: 'Invader', desc: 'Science', date: '2025', status: 'complete' },
    ];

    this.mychart = new Chart("chart", {
      type: 'bar',
      data: {
        labels: ['19/10/2024', '25/10/2024', '04/10/2024', '02/10/2024', '01/10/2024'],

        datasets: [{
          label: "Sales",
          data: ['100', '120', '120', '115', '50'],
          backgroundColor: 'lightblue'
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
