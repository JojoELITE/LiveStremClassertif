'use client'

import { Button } from "@/components/ui/button"

export default function JoinMeet() {


    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
            <div className="p-8 bg-white rounded shadow">
                <h1 className="text-2xl font-bold">Me connecter au Meet</h1>

                <div className="flex justify-center mt-6">
                    <form>
                        <input className="w-full border rounded-md py-2 pl-3" type="text" placeholder="Entrer votre num" />

                        <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 mt-5">
                            Réjoindre
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}