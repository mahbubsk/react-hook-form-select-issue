# React Hook Form

uncontrolled component in react. 

```react
	
	const { register, handleSubmit, formState: { errors }, control } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });
    const onSubmit = data => console.log(data);

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
```

## this is the easiest way to  validate select input box. 


# Happy Hacking :p 

