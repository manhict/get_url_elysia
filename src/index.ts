import { Elysia, Context } from "elysia";

const app = new Elysia()
  .get("/", async (c: Context) => {
    const url = c.query.url;
    if (url) {
      try {
        const response = await fetch(url);
        const data = await response.text();
        return {
          error: false,
          message: 200,
          data: data
        };
      } catch (err: any) {
        return {
          error: true,
          message: err.message,
          data: ""
        };
      }
    } else {
      return 'OK';
    }
  });

app.listen(2000, () => {
  console.log(`🦊 Elysia is running at http://localhost:2000`);
});