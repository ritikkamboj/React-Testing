import { rest } from "msw";

export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(ctx.status(200)),
            ctx.json([
                { name: "anil" },
                { name: "anil1" },
                { name: "anil2" },
                { name: "anil3" }
            ])

    })

]