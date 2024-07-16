import React from 'react'

export function Item({chek,name}) {

    if(chek) {
        return <li>{name}</li>
    }     

    return <li><del>{name}</del></li>
}

 const Conditional = () => {
   return (
     <div className='ml-10 ring-2 ring-slate-300 w-[1200px] h-[200px]'>
         <h1 className='flex justify-center mt-6 text-2xl w-[1300px] text-blue-500'> React Conditionalk Rendering </h1>
         <ul className='font-semibold ml-9 list-disc space-y-1'>

          <Item chek={true} name="leptop"></Item>
          <Item chek={true} name="cemera"></Item>
          <Item chek={false} name="Ac"></Item>
          <Item chek={true} name="Pendrive"></Item>
          <Item chek={false} name="Harddisk"></Item>
          <Item chek={true} name="Phones"></Item>

          </ul>
          

        </div>
   )
 }

 export default Conditional 
 