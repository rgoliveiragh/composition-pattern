'use client'

import { CloseIcon } from "@/components/Icons";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleSubmit = () => {
    console.log('Submit!')
  }

  return (
    <>
      <div className="flex w-full justify-center pb-8">
        <h2 className="text-2xl font-bold">Modal Composition</h2>
      </div>

      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal.Root isOpen={isOpen}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Action onClick={handleCloseModal} title="close">
            <CloseIcon className="text-lg text-gray-700" />
          </Modal.Action>
        </Modal.Header>
        <Modal.Content>
          <h2 className="text-gray-800">IMPORTANT CONTENT</h2>
        </Modal.Content>
        <Modal.Actions>
          <Modal.Action color="error" onClick={handleCloseModal}>
            Close
          </Modal.Action>
          <Modal.Action color="success" onClick={handleSubmit}>Save</Modal.Action>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}