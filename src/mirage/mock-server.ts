import { createServer } from "miragejs"

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api"

      this.get("/test", () => {
        return {msg: "you're learning!"}
      }, {timing: 4000})
    },
  })

  return server
}