import { useState } from 'react'

type FormValues = Record<string, string>
type FormErrors = Record<string, string>
type ValidateFunction = (values: FormValues) => FormErrors

export default function useForm({
	initialValues,
	validate,
}: {
	initialValues: FormValues
	validate: ValidateFunction
}) {
	const [values, setValues] = useState(initialValues)
	const [errors, setErrors] = useState<FormErrors>({})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setValues({
			...values,
			[name]: value,
		})
	}

	const handleSubmit = (onSubmit: () => void) => {
		return (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			setIsSubmitting(true)
			const validationErrors = validate(values)
			setErrors(validationErrors)
			if (Object.keys(validationErrors).length === 0) {
				onSubmit()
			}
			setIsSubmitting(false)
		}
	}

	return {
		values,
		errors,
		isSubmitting,
		handleChange,
		handleSubmit,
		isValid: Object.keys(errors).length === 0,
	}
}
