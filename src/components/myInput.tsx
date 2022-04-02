import React, { FC } from "react";

type inputType = 'username' | 'password' | 'email' | 'phone'

interface IInput {
    type: inputType,
    placeholder: 'Enter your username...' | 'Enter your password...' | "Enter email..." | "Enter phone...",
    defaultValue: string
}

const getInputData = (type: inputType, defaultValue: string): IInput => {
    switch(type) {
        case 'username':
            return {type: 'username', placeholder: 'Enter your username...', defaultValue}
        case 'password':
            return {type: 'password', placeholder: 'Enter your password...', defaultValue}
        case 'email':
            return {type: 'email', placeholder: "Enter email...", defaultValue}
        case 'phone':
            return {type: 'phone', placeholder: "Enter phone...", defaultValue}
    }
}

const MyInput: FC<{type: inputType, handleChange: React.ChangeEventHandler, defaultValue?: string}> = props => {
    const inputData = getInputData(props.type, props.defaultValue || '')

    return (
        <div className='my-input'>
            <input 
            type={inputData.type} 
            placeholder={inputData.placeholder} 
            defaultValue={inputData.defaultValue} 
            onChange={props.handleChange} />
        </div>
    )
}

export default MyInput