import React from 'react'


export function Item({chek,name}) {

    if(chek) {
        return <li>{name}</li>
    }

    return <li><del>{name}</del></li>
   
}

 
 const Conditional = () => {
   return (
     <div>
         <h1 className=''> React Conditionalk Rendering </h1>
         <ul className='mt-7'></ul>
          <Item chek={true} name="leptop"></Item>
          <Item chek={true} name="cemera"></Item>
          <Item chek={false} name="Ac"></Item>
          <Item chek={true} name="Pendrive"></Item>
          <Item chek={false} name="Harddisk"></Item>
          <Item chek={true} name="Phones"></Item>

        </div>
   )
 }
 
 export default Conditional
 