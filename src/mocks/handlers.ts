import { rest } from "msw";

// interface LoginBody {
//   username: string
// }
// interface LoginResponse {
//   username: string
//   firstName: string
// }

const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),

  rest.get("/coins", (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([
        { name: "Bitcoin", website: "https://bitcoin.org/en/" },
        { name: "Litecoin", website: "https://litecoin.com/en/" },
      ])
    )
  ),

  rest.get("https://coins.com/:symbol", (req, res, ctx) => {
    const { symbol } = req.params;

    return res(ctx.json({ symbol }));
  }),
];

export default handlers;
