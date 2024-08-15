import { forwardRef } from "react"
import { Input } from "./Input"
import { Label } from "./Label"

export const InputForm = forwardRef((props, ref) => {
        const { label, name, type, placeholder } = props
        return (
            <div className="mb-6">
                <Label htmlFor={name}>{label}</Label>
                <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
            </div>
        )
    }
)