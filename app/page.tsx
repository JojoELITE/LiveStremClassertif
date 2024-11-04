'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"


export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [invitees, setInvitees] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const meetData = {
      title: formData.get('title'),
      date: formData.get('date'),
      time: formData.get('time'),
      invitees: formData.get('invitees')?.toString().split(',').map(email => email.trim()) || []
    }
    console.log('Détails du Meet:')
    console.log('Titre:', meetData.title)
    console.log('Date:', meetData.date)
    console.log('Heure:', meetData.time)
    console.log('Adresses des invités:', meetData.invitees)
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">Bienvenue au Meet</h1>

        <div className="flex justify-center mt-6 w-full">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Créer un Meet</Button>
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Créer un Meet</DialogTitle>
                <DialogDescription>
                  Remplissez les détails pour créer un nouveau meet.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre</Label>
                  <input id="title" className='w-full border py-2 rounded-md pl-3' placeholder="Entrez le titre du meet" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <input id="date" type="date" className='w-full border py-2 rounded-md pl-3' required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Heure</Label>
                  <input id="time" type="time" className='w-full border py-2 rounded-md pl-3' required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="invitees">Invités (séparez les emails par des virgules)</Label>
                  <textarea
                    id="invitees"
                    name="invitees"
                    className='w-full border py-2 rounded-md pl-3'                     
                    placeholder="email1@example.com, email2@example.com"
                    value={invitees}
                    onChange={(e) => setInvitees(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                  Créer le Meet
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}