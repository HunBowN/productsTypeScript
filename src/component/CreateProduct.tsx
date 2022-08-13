import axios from "axios";
import React, { ReactText, useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./errorMessage";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 43,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHendler = async (event: React.FormEvent) => {
        setError('')
        event.preventDefault()

        if(value.trim().length === 0) {
            setError('Please enter value title')
            return 
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHendler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (

        <form onSubmit={submitHendler}> 
            <input 
                type="text"
                className="border py-2s px-4 mb-2 w-full"
                placeholder="Enter product title"
                value={value}
                onChange={changeHendler}
            />

            { error && <ErrorMessage error={error} /> }

            <button  type="submit" className="border py-2 px-4 rounded-mb bg-yellow-400 hover:text-white" >Create</button>
        </form>
        
    )
}