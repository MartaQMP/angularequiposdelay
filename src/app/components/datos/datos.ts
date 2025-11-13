import { Component, OnInit } from '@angular/core';
import { Datosequipo } from '../../models/datosequipo';
import { FutbolService } from '../../services/futbol';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-datos',
    imports: [],
    templateUrl: './datos.html',
    styleUrl: './datos.css',
})
export class Datos implements OnInit {
    public datos!: Datosequipo;
    public cargando: boolean = true;

    constructor(private _service: FutbolService, private _parametro: ActivatedRoute) {}

    ngOnInit(): void {
        let id!: number;
        this._parametro.params.subscribe((parametros: Params) => {
            if (parametros['id'] != null) {
                id = parseInt(parametros['id']);
            }
            let equipo$ = this._service.getEquipoById(id);
            let jugadores$ = this._service.getJugadoresEquipo(id);

            forkJoin({
                equipo: equipo$,
                jugadores: jugadores$,
            }).subscribe((response) => {
                this.datos = {
                    equipo: response.equipo,
                    jugadores: response.jugadores,
                };
                this.cargando = false;
            });
        });
    }
}
