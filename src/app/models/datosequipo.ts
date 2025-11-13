import { Equipo } from './equipo';
import { Jugador } from './jugador';

export interface Datosequipo {
    equipo: Equipo;
    jugadores: Array<Jugador>;
}
