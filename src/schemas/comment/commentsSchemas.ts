import { object, string } from "yup";
import { SchemaOf } from "yup";
import { IComment } from "../../interfaces/comment/comment";

export const createCommentValidator: SchemaOf<IComment> = 
    object().shape({
        text: string().required('text is required')
    })