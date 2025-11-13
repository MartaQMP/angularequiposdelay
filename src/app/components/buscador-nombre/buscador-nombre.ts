import { Component, OnInit } from '@angular/core';
import { FutbolService } from '../../services/futbol';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from '../../models/jugador';

@Component({
    selector: 'app-buscador-nombre',
    imports: [],
    templateUrl: './buscador-nombre.html',
    styleUrl: './buscador-nombre.css',
})
export class BuscadorNombre implements OnInit {
    public jugadores!: Array<Jugador>;
    public nombre!: string;

    constructor(private _service: FutbolService, private _parametro: ActivatedRoute) {}

    ngOnInit(): void {
        this._parametro.params.subscribe((parametros: Params) => {
            if (parametros['nombre'] != null) {
                this.nombre = parametros['nombre'];
            }
        });
        this._service
            .buscarJugadorNombre(this.nombre)
            .subscribe((response) => (this.jugadores = response));
    }
}
