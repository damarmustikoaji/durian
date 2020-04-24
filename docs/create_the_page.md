#### [<< Back](../docs)

# How to Create the Page file

Untuk membuat file page, kita perlu masuk ke folder `api`. Disarankan peletakkan folder, dan nama file sesuai url endpoint. Dengan begitu akan mempermudah dalam manajemen page (endpoint). Dan sub url terakhir digunakan sebagai nama file.

1. Kita akan membuat page pada endpoint `https://reqres.in/api/login`, maka perlu membuat file didalam folder api dengan `api/login.js`
2. Scripts

```javascript
const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.REQRES_BASE_URL);

const postLogin = (payload) => api.post('/api/login')
	.set('Content-Type', 'application/json')
	.send(payload);

module.exports = {
	postLogin
};
```

3. Membutuhkan module `supertest` untuk melakukan request via HTTP
4. Menggunakan module `dotenv` untuk memanggil variable base url didalam file `.env`
5. `api.post` tipe request endpoint adalah POST, disesuaikan (GET, PUT, dll).
6. `.set .send` disesuaikan properties headers -  body pada endpoint, seperti saat testing di POSTMAN, SWAGGER, dsb.
7. Disarankan nama fungsi juga harus mengandung tipe request endpoint, `postLogin` berarti tipe request post pada endpoint login `/api/login`
