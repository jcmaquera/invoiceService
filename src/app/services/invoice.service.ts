import { Injectable } from '@angular/core';
import { InvoiceDetailsComponent } from '../components/invoice-details/invoice-details.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }

  getInvoiceDetails() {
    return [
      {"description": "Pulsar x2 mouse", "quantity": 1, "unitPrice": 4700.00, "totalPrice": 4700.00},
      {"description": "Akko 5075s keyboard", "quantity": 1, "unitPrice": 5100.00, "totalPrice": 5100.00},
      {"description": "El Gato 3 mic", "quantity": 1, "unitPrice": 8795.00, "totalPrice": 8795.00},
      {"description": "Glorious Model O mouse", "quantity": 2, "unitPrice": 3500.00, "totalPrice": 7000.00},
      {"description": "Hyper X Cloud 2 headset", "quantity": 3, "unitPrice": 4700.00, "totalPrice": 14100.00}
    ];
  }

  getTotal() {
    let sum: number = 0;
    this.getInvoiceDetails().forEach(i => sum += i.totalPrice);
    return(sum);
  }
}
