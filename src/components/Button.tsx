import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva( 'border h-12 rounded-full px-6 font-medium', {
    variants:  {
        variant: {
            primary: 'bg-indigo-600 text-neutral-950 border-indigo-600',
            secondary: 'border-white text-white bg-transparent'
        },
        size: {
            sm: 'h-10',
        }
    }
})

export default function Button(
    props: {variant: "primary" | "secondary"; 
        size?:"sm"} & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { variant, className,size,  ...otherProps } = props;
    return (
        <button
            className={classes({
                variant, 
                size,
                className,
            })}
            {...otherProps}
        /> 
    );
}