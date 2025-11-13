import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Equipo } from '../../models/equipo';
import { FutbolService } from '../../services/futbol';

@Component({
    selector: 'app-menu',
    imports: [RouterLink],
    templateUrl: './menu.html',
    styleUrl: './menu.css',
})
export class Menu implements OnInit {
    public equipos: Array<Equipo> = new Array<Equipo>();
    @ViewChild ("buscador") buscador!: ElementRef

    constructor(private _service: FutbolService, private _route:Router) {}

    ngOnInit(): void {
        this._service.getEquipos().subscribe((response) => (this.equipos = response));
    }

    mandarABuscar(): void {
        this._route.navigate(['buscadornombre/'+this.buscador.nativeElement.value])
    }

}
