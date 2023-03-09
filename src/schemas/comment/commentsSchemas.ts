import { object, string } from "yup";
import { SchemaOf } from "yup";
import { IComment, ICommentUpdate } from "../../interfaces/comment/comment";

export const createCommentValidator: SchemaOf<IComment> = object().shape({
  text: string().required("text is required"),
});

export const updateCommentValidator: SchemaOf<ICommentUpdate> = object().shape({
  text: string().required("text is required"),
});
