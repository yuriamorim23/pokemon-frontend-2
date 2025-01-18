import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonResponse } from "../models/pokemon-response.model";
import { GuessResponse } from "../models/guess-response.model";
import { environment } from "../../environment/environment";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // private apiUrl = 'http://localhost:8080/api/v1/pokemon';

  private apiUrl = environment.apiUrl;

  // private apiUrl = 'http://<AWS_EC2_IP>:8080/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  fetchPokemonById(id: number): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.apiUrl}/${id}`);
  }

  verifyGuess(id: number, guess: string): Observable<GuessResponse> {
    return this.http.post<GuessResponse>(`${this.apiUrl}/verify?id=${id}&guess=${guess}`, {});
  }
}
