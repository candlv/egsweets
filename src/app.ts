import express from "express";
import cors from "cors";
import routes from "./api/routes.index";
import fileUpload from "express-fileupload";

const app: express.Application = express();
export const port = process.env.PORT || 8000

app.use(express.json());
app.use(express.static('public'))
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Navigate to -> localhost:${port} on your browser`)
});


export default app;
