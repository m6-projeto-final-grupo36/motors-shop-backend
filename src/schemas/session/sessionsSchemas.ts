import { object, SchemaOf, string, number, date, mixed } from 'yup'
import { ILogin } from '../../interfaces/session/session'

export const loginSessionValidator: SchemaOf<ILogin> = 
    object().shape({
        email: string().email('email invalid').required('email is required'),
        password: string().required('password is required')
    })