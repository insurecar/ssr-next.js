export default function echo(req, resp) {
  resp.statusCode = 200;
  resp.setHeader("Content-Type", "application/json");
  resp.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
}
