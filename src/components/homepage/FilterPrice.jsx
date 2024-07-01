import React from 'react';
import './styles/filterprice.css';
import { useForm } from 'react-hook-form';

const FilterPrice = ({setInputPrice}) => {



    const { handleSubmit, register } = useForm();

    const submit = (data) => {
        setInputPrice({
            min: data.min,
            max: data.max || Infinity,
        })
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <h3>Filters per price</h3>
            <div>
                <label htmlFor="min">From</label>
                <input {...register('min')} type="text" id="min" />
            </div>
            <div>
                <label htmlFor="max">To</label>
                <input {...register('max')} type="text" id="max" />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default FilterPrice