import { forwardRef } from "react";

export const ButtonDefault = forwardRef(({children, ...rest}, ref) =>{
    return(
        <button {...rest} ref= {ref}>
            {children}
        </button>
    )
})

 