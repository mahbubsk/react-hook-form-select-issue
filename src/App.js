import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });
    const onSubmit = data => console.log(data);
    // console.log(errors);

    return (
        <div style={{textAlign:'center'}}>
            <h2>React Hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="gender"
                    rules={{required: "gender is required"}}
                    render={({
                        field: { onChange }
                    }) => (
                        <div>
                            <select onChange={onChange}>
                                <option value="">select</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            <p>{errors.gender && errors.gender.message}</p>
                        </div>

                    )}
                />
                
                <button type="submit">submit</button>
            </form>
        </div>
    );
}