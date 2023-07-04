import {useState} from "react";

export function useError() {
    const [error, setError] = useState(null);
    const [errorIsOpen, setErrorIsOpen] = useState(false);

    const handleErrorShowUp = (error) => {
        setErrorIsOpen(true)
        setError(error)
    };

    const handleErrorClear = () => {
        if (error) {
            setErrorIsOpen(false);
            setError(null);
        }
    }

    return {error, errorIsOpen, handleErrorClear, handleErrorShowUp}
}
