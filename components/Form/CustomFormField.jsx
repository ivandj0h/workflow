import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"

const CustomFormField = ({control, name, label, type='text', placeholder, ...rest}) => {
  return (
    <FormField 
      control={control}
      name={name}
      render={({field}) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input 
              {...field} 
              {...rest} 
              type={type} 
              placeholder={placeholder} 
              className='text-sm font-normal placeholder:font-[300] focus-visible:ring-0 focus-visible:ring-offset-0 bg-muted/50'
            />
          </FormControl>

          <FormMessage/>
        </FormItem>
      )}
    />
  )
}

export default CustomFormField