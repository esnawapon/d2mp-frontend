import { HttpHeaders } from '@angular/common/http';

export const BASE_HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// export const BASE_URL = '/api';
export const BASE_URL = 'http://localhost:1337/localhost:8080/api';
