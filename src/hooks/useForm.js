import { useState } from "react";
//https://react-hook-form.com/ libreria de 3ros para formularios
export const useForm = ( initialForm = {}) => {
    const [formState, setformState] = useState( initialForm );
    

    const onResetForm = () => {
        setformState(initialForm);
    }

    const onInputChange = ({target}) => {
        const { name, value } = target;
    
        setformState({
            ...formState,
            [ name ]:value
        });
    
      }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
