import { Injectable } from '@angular/core';
//import { HttpModule } from '@angular/http';

@Injectable()
export class CandidatosService {

  constructor(
   // private http: HttpModule
  ) { }

  /**
	* Listando candidatos
	*/
  getCandidatos() {
   // return this.http.get('https://delineaapi.herokuapp.com/candidate/').toPromise().then(response => response.json()).catch(this.handleError);

    return [{full_name: 'Tiago Brum', email:'teste@gmail.com', phone:'(99) 99999-9999'}]
    }

  /**
	* Nova candidato
	* @param candidato: Array
	* @return http POST
	*/
	/*addCandidato(candidato: Array){
	 	let body = JSON.stringify(candidato);
	 	let headers = new Headers({'Content-Type': 'application/json'});
	 	let options = new RequestOptions({ headers: headers });

	 	return this.http.post('https://delineaapi.herokuapp.com/candidate/', body, options)
		 	.toPromise()
		 	.then(res => res.json())
		 	.catch(this.handleError);
	}*/

  /**
	* Editar candiato
	* @param candidato: Array
	* @return http PUT
	*/
	/*editar(candidato: Array){
	 	let id = candidato.id;
	 	delete candidato.id;
	 	let body = JSON.stringify(candidato);
	 	let headers = new Headers({ 'Content-Type': 'application/json' });
	 	let options = new RequestOptions({ headers: headers });

	 	let url = this.apiUrl + '/' + id;

	 	return this.http.put(url, body, options)
		 	.toPromise()
		 	.then(res => res.json())
		 	.catch(this.handleError);
	}*/

	/**
	* Excluir candidato
	* @param id: number
	* @return http DELETE
	*/
	/*excluir(id: number){
	 	let url = this.apiUrl + '/' + id;
	 	return this.http.delete(url)
		 	.toPromise()
		 	.then(res => res.json().data)
		 	.catch(this.handleError);
	}*/

}
