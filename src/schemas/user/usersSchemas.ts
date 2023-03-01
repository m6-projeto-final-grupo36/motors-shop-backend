import { object, SchemaOf, string, number, date, mixed } from "yup";
import { ICreateUser, IUserUpdate } from "../../interfaces/user/user";
import { hashSync } from "bcryptjs";

export const createUserValidator: SchemaOf<ICreateUser> = object().shape({
  name: string().required("name is required"),
  email: string().email("email invalid").required("email is required"),
  cpf: string()
    .required("cpf is required")
    .matches(
      /^([0-9]{3}[\.3]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})+$/,
      "cpf invalid"
    ),
  cell_phone: string()
    .required("cell_phone is required")
    .matches(
      /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$$/,
      "cell_phone invalid"
    ),
  birthdate: date().required("birthdate is required"),
  description: string().required("description is required"),
  password: string()
    .transform((pwd) => hashSync(pwd, 10))
    .required("password is required"),
  type_account: mixed().oneOf(["buyer", "advertiser"]).default("buyer"),
  address: object().shape({
    cep: string()
      .required("cep is required")
      .matches(/[0-9]{5}-?[\d]{3}/, "cep invalid"),
    state: string().max(2, "state invalid").required("state is required"),
    city: string().required("city is required"),
    road: string().required("road is required"),
    number: number()
      .integer("number invalid")
      .positive("number invalid")
      .required("number is required"),
    complement: string().notRequired(),
  }),
});

export const updateUserValidator: SchemaOf<IUserUpdate> = object().shape({
  name: string().notRequired(),
  email: string().notRequired().email("email invalid"),
  cpf: string()
    .notRequired()
    .matches(
      /^([0-9]{3}[\.3]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})+$/,
      "cpf invalid"
    ),
  cell_phone: string()
    .notRequired()
    .matches(
      /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$$/,
      "cell_phone invalid"
    ),
  birthdate: date().notRequired(),
  description: string().notRequired(),
  password: string()
    .transform((pwd) => hashSync(pwd, 10))
    .notRequired(),
  type_account: mixed().oneOf(["buyer", "advertiser"]).notRequired(),
  address: object()
    .notRequired()
    .shape({
      cep: string()
        .notRequired()
        .matches(/[0-9]{5}-?[\d]{3}/, "cep invalid"),
      state: string().max(2, "state invalid").notRequired(),
      city: string().notRequired(),
      road: string().notRequired(),
      number: number()
        .integer("number invalid")
        .positive("number invalid")
        .notRequired(),
      complement: string().notRequired(),
    }),
});
