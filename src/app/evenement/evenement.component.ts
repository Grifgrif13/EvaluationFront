import { Component } from '@angular/core';
import { Evenement } from '../models/evenement';

@Component({
  selector: 'event-evenement',
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css'
})
export class EvenementComponent implements OnInit{

  @Input() Evenement!: Evenement;

  Evenements: Evenement[] = [];
  searchEvenement: EvenementSearchDtoUp = {
    name: ''
  };
  searchEvenementName: string | undefined;
  deletedEvenementName = '';
  isDeleteSuccessPopupVisible = false;

  constructor(private EvenementService: EvenementService, private router: Router) {}

  ngOnInit() {
    this.loadEvenements();
  }


  onDeleteEvenement(EvenementName: string) {
    this.Evenements = this.Evenements.filter(event => event.Name !== EvenementName);
    this.deletedEvenementName = EvenementName;
    this.isDeleteSuccessPopupVisible = true;

    setTimeout(() => {
      this.isDeleteSuccessPopupVisible = false;
    }, 7000);
  }

  loadEvenements(): void {
      this.EvenementService.getEvenements().subscribe({
        next: (Evenements: Evenement[]) => {
          console.log('Données des Evenements :', Evenements);
          this.Evenements = Evenements;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des Evenements :', error);
        }
      });
    }

  /** Navigates to the specified route. */
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
