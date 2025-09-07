import type { ReactElement } from "react"

type HeadingProps = {
    title: string, 
    subtitle : string 
} 

const Heading = ({ title ,subtitle}: HeadingProps) : ReactElement => {
    return (
      <div className="text-center my-4 font-extralight font-serif text-red-500 rounded-2xl p-4 ">
            <h3>{title}</h3>  
            <h4>{subtitle}</h4>
            <hr className="border-1 border-red-500 w-1/4 mx-auto mt-2"/>
      </div>
  )
}

export default Heading