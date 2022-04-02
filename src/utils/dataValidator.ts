import { IContact, IServerError, IUser } from "./myInterfaces"

class DataValidator {
    private baseUrl = 'http://localhost:4000/users'

    validateUsername = async (username: string): Promise<IServerError | null> => {
        if (!username) return {message: 'Username is required to proceed!', status: 401}
        const response = await fetch(`${this.baseUrl}?username=${username}`)
        if (response.ok) {
            const users: IUser[] = await response.json()
            if (users.length > 0) {
                return {status: 401, message: 'Username is taken! Try something else!'}
            }
            return null
        } else {
            return {status: response.status, message: 'Unexpected server error!'}
        }
    }

    private validateEmail = (email: string): IServerError | null => {
        const isValidEmail = !!email.toLowerCase()
        .match(
            /\S+@\S+\.\S+/
        )
        return !isValidEmail ? {status: 401, message: 'Invalid email'} : null
    }

    private validatePhone = (phone: string): IServerError | null => {
        const isValidPhone: boolean = !!(phone.length >= 10 && phone.length <= 12 && phone.match(/\+?\d{10}\d?/))
        return !isValidPhone ? {status: 401, message: 'Invalid phone'} : null
    }

    validateContact = (contact: IContact): IServerError | null => {
        const isValidEmail = this.validateEmail(contact.email)
        const isValidPhone = this.validatePhone(contact.phone)
        return isValidEmail || isValidPhone || null
    }
}

export default new DataValidator()