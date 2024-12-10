import { useState } from "react"


interface Props {
    children: string
}
const ExpandableText = ({children}: Props) => {

 const [expanded, setExpanded] = useState(false)
 const limit = 300

 if (!children) return null;
 if (children.length <= limit)
    return <p className="text-lg text-slat-600 prose">{children}</p>
 const summary = expanded ? children : children.substring(0, limit) + '...'  
 
 return(
    <p className="text-lg text-slat-600 prose"> {summary} <button className='btn btn-xs btn-accent' onClick={() => setExpanded(!expanded)} >{expanded ?  'Show Less' : "Read More"}</button></p>
 )
 
}

export default ExpandableText
