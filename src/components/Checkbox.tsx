import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { X } from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {    
    return (
        <CheckboxPrimitive.Root 
            className='w-6 h-6 p-[2px] bg-gray-800 rounded'
        >
            <CheckboxPrimitive.CheckboxIndicator asChild>
                <X weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPrimitive.CheckboxIndicator>
        </CheckboxPrimitive.Root>
    )
}