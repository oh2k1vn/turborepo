import React, { createContext, useContext, useState } from 'react';

interface TableContextType {
    column: string | null;
    setColumn: (col: string | null) => void;
}

const TableContext = createContext<TableContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}

export default function TableProvider({ children }: Props) {
    const [column, setColumn] = useState<string | null>(null);

    return (
        <TableContext.Provider value={{ column, setColumn }}>
            {children}
        </TableContext.Provider>
    );
}

export const useTable = () => {
    const tableContext = useContext(TableContext);

    if (!tableContext) {
        throw new Error('useTable must be used within a <TableProvider>');
    }

    return tableContext;
};
