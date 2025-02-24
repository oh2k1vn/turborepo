import useDialogState from '@repo/ui/hooks/use-dialog-state'
import React, { useState } from 'react'

type ProductsDialogType = 'create' | 'update' | 'delete' | 'import'

interface ProductsContextType {
  open: ProductsDialogType | null
  setOpen: (str: ProductsDialogType | null) => void
  currentRow:  null
  setCurrentRow: React.Dispatch<React.SetStateAction< null>>
}

const ProductsContext = React.createContext<ProductsContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function ProductsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ProductsDialogType>(null)
  const [currentRow, setCurrentRow] = useState< null>(null)
  return (
    <ProductsContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </ProductsContext>
  )
}

export const useProducts = () => {
  const productsContext = React.useContext(ProductsContext)

  if (!productsContext) {
    throw new Error('useproducts has to be used within <productsContext>')
  }

  return productsContext
}
