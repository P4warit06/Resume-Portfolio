import  {type ReactNode }  from 'react'

type SectionProps = {
    title : string,
    children?: ReactNode
}

export const Section = ({ children, title = "My SubHeading" }:SectionProps) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-200">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>  
  )
}

