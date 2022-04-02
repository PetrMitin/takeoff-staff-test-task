import { FC } from "react"
import { useAppSelector } from "../store/hooks"

const ErrorMessage: FC = () => {
    const error = useAppSelector(state => state.error)
    return (
        <div id="error-message">
            <h1>Oops! Error! {error?.message} Refresh page and try again.</h1>
        </div>
    )
}

export default ErrorMessage