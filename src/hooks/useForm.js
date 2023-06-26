import { useState, useCallback } from "react";

export function useForm() {
    const [values, setValues] = useState({});

    const handleChange = (evt) => {
        const input = evt.target;
        const value = input.value;
        const name = input.name;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}

export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const input = evt.target;
        const value = input.value;
        const name = input.name;
        setValues({ ...values, [name]: value });
        setErrors({
            ...errors,
            [name]: input.validationMessage
        });
        setIsValid(input.closest("form").checkValidity());

    };
    console.log('ERRORS', errors);
    const resetFrom = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, setValues, handleChange, resetFrom, errors, isValid };
}
