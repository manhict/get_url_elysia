import { Elysia, Context } from "elysia";

const app = new Elysia()
  .get("/", (c: Context) => {
    if (c.query.url) {
      try{
        return fetch(c.query.url)
        .then(r => r.text())
        .then((data) => {
          return {
            error: false,
            message: 200,
            data: data
          }
        })
        .catch((err:any) => {
          return {
            error: true,
            message: err.message,
            data: ""
          }
        });
      }
      catch(err:any){
        return {
          error: true,
          message: err.message,
          data: ""
        }
      }
    }
    else return 'OK';
  }).listen(2000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
