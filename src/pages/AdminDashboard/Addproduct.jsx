import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import JSAlert from 'js-alert'
import { AuthContext } from '../../AuthProvider';
import { Slide } from 'react-awesome-reveal';
const Addproduct = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
     setSelectedOption(e.target.value);
   };
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    console.log(startDate)
const {user}=useContext(AuthContext)

    const addNewProperty=(e)=>{
        e.preventDefault()
        const form=e.target 
        const sellername=form.sellername.value
        const email=form.email.value
        const name=form.name.value
       
        const category=selectedOption
       
       
        const quantity=parseInt(form.quantity.value)
      
        const picture=form.picture.value
        const start=startDate
        const Enddata=startDate2
        const price=parseInt(form.price.value)
        const rate=form.rate.value
        const Description=form.Description.value
       const  allInfo={email,sellername,name,category,quantity,picture,start,Enddata,price,rate,Description}
        console.log(allInfo)
        fetch('http://localhost:5000/postproduct',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(allInfo)
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.insertedId){
            JSAlert.alert("Succesfuly added new apartment");
           }
        })



        
    }





    return (
        <Slide direction='up'>
            <p className=' text-center text-3xl font1 my-10 text-black'>Add product</p>
            <div>
                <form onSubmit={addNewProperty} className='grid justify-items-center lg:grid-cols-3 gap-4' action="">
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> sellername</p>
    <input type="text" value={user?.name} className='w-[300px]  mb-6 py-3 border-b-2 ' name='sellername'  />
    
</div>
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> Owner email</p>
    <input type="text" value={user?.email} className='w-[300px]  mb-6 py-3 border-b-2 ' name='email'  />
    
</div>
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> Name</p>
    <input type="text" className='w-[300px]  mb-6 py-3 border-b-2 ' name='name'  />
    
</div>
              
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> Category</p>
 
    <select className='w-[300px]  mb-6 py-3 border-b-2 ' value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select product Category</option>
          <option value="bag">Bag</option>
          <option value="tshirts">t-shirts</option>
          <option value="electronics">electronics</option>
          <option value="laptop">laptop</option>
          <option value="mobile">mobile </option>
          <option value="headphone">headphone </option>
          <option value="sunglass">sunglass </option>
          <option value="accessories">accessories </option>
          <option value="shoes">shoes </option>
         
        </select>
    
</div>
               
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> quantity</p>
    <input type="text" className='w-[300px]  mb-6 py-3 border-b-2 ' name='quantity'  />
    
</div>
             
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'>  picture,</p>
    <input type="text" className='w-[300px]  mb-6 py-3 border-b-2 ' name='picture'  />
    
</div>
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> offer starts from</p>
   <p className='w-[300px]  mb-6 py-3 border-b-2 '> <DatePicker
      
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    /></p>
    
</div>
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> offer end date</p>
  
    <p  className='w-[300px]  mb-6 py-3 border-b-2 '>
    <DatePicker
      
      selected={startDate2}
      onChange={(date) => setStartDate2(date)}
    />
    </p>
</div>
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> price</p>
    <input type="text" className='w-[300px]  mb-6 py-3 border-b-2 ' name='price'  /> 
    
</div>
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> rate</p>
    <input type="text" className='w-[300px]  mb-6 py-3 border-b-2 ' name='rate'  /> 
    
</div>
                <div>
    <p className='text-gray-900 text-[17px] font1 mt-3'> Description</p>
    <input type="text" className='w-[300px]  mb-6 py-3 border-b-2 ' name='Description'  /> 
    
</div>
                <div>
   
    <input className='bg-red-500 text-white rounded-lg px-2 py-2 ' type="submit" value='submit'  /> 
    
</div>


                </form>
            </div>
            
        </Slide>
    );
};

export default Addproduct;