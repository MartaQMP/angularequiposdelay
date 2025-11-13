import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { Equipo } from '../models/equipo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FutbolService {
    constructor(private _http: HttpClient) {}

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>> {
        let request = 'api/jugadores/jugadoresequipos/' + idEquipo;
        return this._http.get<Array<Jugador>>(environment.urlEquipos + request);
    }
    getEquipoById(idEquipo: number): Observable<Equipo> {
        let request = 'api/equipos/' + idEquipo;
        return this._http.get<Equipo>(environment.urlEquipos + request);
    }

    getEquipos(): Observable<Array<Equipo>> {
        let request = 'api/equipos';
        return this._http.get<Array<Equipo>>(environment.urlEquipos + request);
    }

    buscarJugadorNombre(nombre: string): Observable<Array<Jugador>> {
        let request = 'api/jugadores/buscarjugadores/' + nombre;
        return this._http.get<Array<Jugador>>(environment.urlEquipos + request);
    }
}
