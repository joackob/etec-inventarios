'use client'

import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useState } from 'react'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export default function SubirArchivos() {
  const [isUploading, setEstaSubiendose] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = event.target.files

    if (!archivos || archivos.length === 0) {
      alert("No se seleccionó ningún archivo")
      return
    }

    setEstaSubiendose(true)
    const formData = new FormData()
    for (let i = 0; i < archivos.length; i++) {
      formData.append("file", archivos[i])
    }

    try {
      console.log("Iniciando subida de archivos...")
      const response = await fetch("/api/subida", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || response.statusText)
      }

      const result = await response.json()
      console.log("Respuesta del servidor:", result)
      alert("Archivos subidos exitosamente")
    } catch (error) {
      console.error("Error detallado al subir archivos:", error)
      if (error instanceof Error) {
        alert(`Error al subir los archivos: ${error.message}`)
      } else {
        alert("Error desconocido al subir los archivos")
      }
    } finally {
      setEstaSubiendose(false)
      // Clear the input
      event.target.value = ''
    }
  }

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      disabled={isUploading}
    >
      {isUploading ? 'Subiendo...' : 'Subir Archivos'}
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileUpload}
        multiple
      />
    </Button>
  )
}

