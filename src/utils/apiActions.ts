import dataValidator from "./dataValidator";
import { IUser, IContact, IUserJSONRes } from "./myInterfaces";

class apiActions {
    private baseUrl = 'http://localhost:4000/users'

    logIn = async (username: string, password: string): Promise<IUser> => {
        const res: Response = await fetch(`${this.baseUrl}?username=${username}`)
        if (res.ok) {
            const jsonRes: IUserJSONRes = await res.json()
            console.log(jsonRes)
            const user = jsonRes[0]
            console.log(user, password)
            if (!user) throw new Error('403')
            if (user.password === password) {
                return user
            } else {
                throw new Error('403')
            }
        } else {
            throw new Error(res.status.toString())
        }
    }

    signUp = async (username: string, password: string): Promise<IUser> => {
        const isUsernameValid = await dataValidator.validateUsername(username)
        if (isUsernameValid) throw isUsernameValid
        const newUser: IUser = {
            id: Date.now().toString(),
            username,
            password,
            contacts: []
        }
        const res: Response = await fetch(`${this.baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        if (res.ok) {
            const jsonRes: IUser = await res.json()
            console.log(jsonRes)
            const user = jsonRes
            console.log(user, password)
            if (user.password === password) {
                return user
            } else {
                throw new Error('401')
            }
        } else {
            throw new Error(res.status.toString())
        }
    }

    getContacts = async (user: IUser): Promise<IUser> => {
        const res: Response = await fetch(`${this.baseUrl}/${user.id}`)
        if (res.ok) {
            const jsonRes: IUserJSONRes = await res.json()
            const resUser = jsonRes[0]
            return resUser
        } else {
            throw new Error(res.status.toString())
        }
    }

    addContact = async (user: IUser, newContact: IContact): Promise<IUser> => {
        const isValidContact = dataValidator.validateContact(newContact)
        if (isValidContact) throw isValidContact 
        user.contacts.push(newContact)
        const res: Response = await fetch(`${this.baseUrl}/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (res.ok) {
            const jsonRes: IUser = await res.json()
            console.log(jsonRes)
            return jsonRes
        } else {
            throw new Error(res.status.toString())
        }
    }

    changeContact = async (user: IUser, newContact: IContact): Promise<IUser> => {
        const isValidContact = dataValidator.validateContact(newContact)
        if (isValidContact) throw isValidContact
        const newContacts: IContact[] = user.contacts.map((contact: IContact) => contact.id === newContact.id ? newContact : contact)
        const res: Response = await fetch(`${this.baseUrl}/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...user, contacts: newContacts})
        })
        if (res.ok) {
            const jsonRes: IUser = await res.json()
            console.log(jsonRes)
            return jsonRes
        } else {
            throw new Error(res.status.toString())
        }
    }

    deleteContact = async (user: IUser, contactToDelete: IContact): Promise<IUser> => {
        const newContacts: IContact[] = user.contacts.filter((contact: IContact) => contact.id !== contactToDelete.id)
        const res: Response = await fetch(`${this.baseUrl}/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...user, contacts: newContacts})
        })
        if (res.ok) {
            const jsonRes: IUser = await res.json()
            console.log(jsonRes)
            return jsonRes
        } else {
            throw new Error(res.status.toString())
        }
    }
}

export default new apiActions()