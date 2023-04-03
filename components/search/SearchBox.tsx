"use client"

import { FormEvent, FormEventHandler, useState } from "react"
import { useRouter } from "next/navigation"


export default function SearchBox() {

    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!search) return;

        router.push(`/search/${search}`)
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                className='flex max-w-6xl mx-auto justify-between items-center px-5'
            >
                <input
                    type="text"
                    value={search}
                    name="search"
                    id="search"
                    placeholder='Search keywords...'
                    className='w-full h-14 rounded placeholder-gray-500 outline-none bg-gray-700 px-5  flex-1'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    disabled={!search}
                    type="submit"
                    className='text-amber-600 disabled:text-gray-400'
                >
                    Search
                </button>
            </form>
        </div>
    )
}
