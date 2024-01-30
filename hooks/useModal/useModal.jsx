"use client"

import { useState } from 'react'

export const useModal = (initial = true) => {

const [ isOpenModal, setIsOpenModal ] = useState(initial) 

const openModal = () => setIsOpenModal(true)
const closeModal = () => setIsOpenModal(false)

  return [isOpenModal, openModal, closeModal]
}

export default useModal;