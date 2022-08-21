import React, { useState } from 'react';
import {Field, Form, Formik,ErrorMessage,FieldArray,FastField, } from 'formik';
import * as Yup from 'yup'

import "./form.css";
const initialValues = {
  Name :"vivek",Dateofbirth:"",mobile:"",govtid:"",gardian:"",email:"viveksnh933@gmail.com",contactno:"",sex:""
  ,title:"",iddetail:"",state:"",city:"",country:"",pincode:"",occupation:"",religion:"",Maritial:"",
bloodgroup:"",nationality:""
}

const Savedvalues = {
  Name :"vivek",Dateofbirth:"",mobile:"",govtid:"",gardian:"",email:"",contactno:"",sex:""
  ,title:"",iddetail:"",state:"",city:"",country:"",pincode:"",occupation:"",religion:"",Maritial:"",
bloodgroup:"",nationality:""
}

const onSubmit = (values,submitProps) => {
  // console.log('Form data',values);
  // console.log('submitProps',submitProps);
  submitProps.setSubmitting(false)
  submitProps.resetForm()

}



const validationSchema = Yup.object({
  name:Yup.string().required('Required'),
  email:Yup.string().email('Invalid email format').required('Required'),
  Dateofbirth:Yup.string().required('Required'),
  mobile:Yup.string().required('Required'),
  govtid:Yup.string().required('Required'),
  gardian:Yup.string().required('Required'),
  contactno:Yup.string().required('Required'),
  sex:Yup.string().required('Required'),
  title:Yup.string().required('Required'),
  iddetail:Yup.string().required('Required'),
  state:Yup.string().required('Required'),
  city:Yup.string().required('Required'),
  country:Yup.string().required('Required'),
  pincode:Yup.string().required('Required'),
  occupation:Yup.string().required('Required'),
  religion:Yup.string().required('Required'),
  Maritial:Yup.string().required('Required'),
  bloodgroup:Yup.string().required('Required'),
  nationality:Yup.string().required('Required'),


})
var arr =[];
function appendata(arr){
 console.log(arr)
}
appendata()

const Formdetails= () => {
  const [formValues,setFormValues]  = useState(appendata)
  
  
  return (
    <div>
    <Formik initialValues={formValues || initialValues } onSubmit={onSubmit} validationSchema ={validationSchema} enableReinitialize>
      {formik =>{

        // console.log('formik props',formik)
        arr.push(formik.values)
       
       

    return (
    <Form className='form'>
     <h3 className='form-heading'>Personal Details</h3>
     <div className='pesonal-detail'>
        <div className="inner-personal-detail">
            <span>Name</span>
            <Field type="text"  name="name"/>
        </div>
        <div>
            <span>Date-of-birth</span>
            <Field type="text"  name="Dateofbirth"/>
        </div>
        <div className='personal-detail-select'>
        <span >sex</span>
        <span className='personal-detail-span'>*</span>
        <Field as="select" name="sex">
      
        <option value="-------">------</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">other</option>
       </Field>
        </div>
       
     </div>
     < div className='pesonal-detail'>
      <div className="inner-personal-detail">
        <span>Mobile</span>
        <Field type="text" name="mobile"/>
        </div>
          <div className="inner-personal-detail">
            <span>Govt issued Id</span>
            <Field as="select" name="iddetail">
              <option value="---------">--------</option>
              <option value="AAdhar">AAdhar</option>
              <option value="voter-id">voter-id</option>
              <option value="Driving-licience">Driving-licience</option>
              <option value="Pan-card">Pan-card</option>
              <option value="Narega-passbook">Narega-passbook</option>
              <option value="Bank-passbook">Bank-passbook</option>
              <option value="Passport">Passport</option>
              <option value="Ration-card">Ration-card</option>
            </Field>
            <Field type="text" name = "govtid" />
          </div>
      

       
        </div>
        <hr />
       
          <h3 className='form-heading'>Contact Details</h3>
          <div className='pesonal-detail'>
       <div >
        <span>Gardian Name</span>
        <Field as="select" name="title">
        <option value="----">------</option>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        </Field>
        <Field type="text" placeholder='enter gardian name' name ="gardian"/>
       </div>
       <div>
        <span>Email</span>
        <Field type="text" placeholder='email' name = "email"/>
       </div>
       <div>
        <span>Emergency contact no</span>
        <Field type="text" placeholder='contact no' name = "contactno"/>
       </div>
       </div>
       <h3 className='form-heading'>Address Details</h3>

       <div className='pesonal-detail'>
       
       <div>
        <span>Address</span>
        <Field type="text" placeholder='address' name = "address"/>
       </div>
       <div>
        <span>State</span>
        <Field as="select" name="state">
        <option value="----">------</option>
        <option value="Delhi">Delhi</option>
        <option value="Bihar">Bihar</option>
        <option value="Maharastra">Maharastra</option>
        <option value="West-Bengal">West-Bengal</option>
        <option value="Gujrat">Gujrat</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Punjab">Punjab</option>
        <option value="Himmachhal Pradesh">Himachal pradesh</option>
        <option value="Goa">Goa</option>
        <option value="Jammu Kashmir">Jammu Kashmir</option>
        <option value="Assam">Asssam</option>
        <option value="Uttar Pradesh">uttar prasesh</option>
        <option value="Uttarakhand">uttarakhand</option>
        <option value="Madhya Pradesh">Madhya pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Orrisa">Orrisa</option>
        <option value="Tamil nadu">Tamilnadu</option>
        <option value="Kerala">Kerala</option>
        <option value="Andra pradesh">Andra pradesh</option>
        <option value="Telangana">Telengana</option>
      

        </Field>
        
       </div>
      
       <div>
        <span>City</span>
        <Field as="select" name="city">
        <option value="----">------</option>
        <option value="Gaya">Gaya</option>
        <option value="Patna">Patna</option>
        <option value="Delhi">Delhi</option>
        <option value="Tata">Tata</option>
        <option value="Bangaluru">Bangaluru</option>
        <option value="thrivatpuram">Trivatpurram</option>
        <option value="lucknow">Lucknow</option>
        <option value="varanashi">Varanashi</option>
        <option value="mumbai">mumbai</option>
        <option value="Panaji">Panaji</option>
        <option value="Gurugram">Gurugram</option>
        <option value="Allahabad">Allahabad</option>
        <option value="jhonpur">jhonpur</option>
        </Field>
      
       </div>
       </div>
      
         <div className="inner-personal-detail">
          <span>country</span>
       <Field as ="select" name = "country">
        <option value="India">India</option>
        <option value="Usa">Usa</option>
        <option value="Uk">UK</option>
        <option value="Brazil">Brazil</option>
        <option value="Germany">Germany</option>
        <option value="Itally">Ittaly</option>
        <option value="Maldivis">Maldivis</option>
        <option value="Belarus">Balarus</option>
        <option value="Russia">Russia</option>
        <option value="Saudi-arab">Saudi-arab</option>
        <option value="Oman">Oman</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Spain">Spain</option>
        <option value="England">England</option>
        <option value="Israel">Israel</option>
       </Field>
       <span>Pincode</span>
       <Field type="text" placeholder='pincode' name = "pincode"/>
       
       </div>
      
      
       <hr />
       <h3 className='form-heading'>Other Details</h3>
          <div className='pesonal-detail'>
            <div>
              <span>Occupation</span>
              <Field type="text" name="occupation"/>

            </div>
          
       <div>
        <span>Religion</span>
        <Field as="select" name="religion">
        <option value="----">------</option>
        <option value="HIndu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Cristiane">Cristiane</option>
         <option value="Sikh">Sikh</option>
        </Field>
       
       </div>
       <div>
        <span>Marital Status</span>
        <Field as="select" name="Maritial">
        <option value="----">------</option>
        <option value="Married">Married</option>
        <option value="un-married">un-married</option>
        </Field>
        
       </div>
       <div>
        <span>Blood Group</span>
        <Field as="select" name="bloodgroup">
        <option value="----">------</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B-">B-</option>
        <option value="B+">B+</option>
        <option value="o-">O-</option>
        <option value="o+">O+</option>
        </Field>
     
       </div>
            </div>
            <div className='pesonal-detail'>
              <div >
                <Field as ="select" name = "nationality">
                  <option value="Indian">Indian</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Srilankan">Srilankan</option>
                </Field>
              </div>
              </div>

       

       <div class = "button">
       <button className='btn1'>Cancel</button>
      <button type='button' className='btn2' onClick={() => {
      setFormValues(Savedvalues)
      }}> submit</button>
        
       </div>
      

    </Form>
      )
    }}
    </Formik>


    <div>
  
   
    </div>
    <div>

</div>

    </div>
  )
}



export default Formdetails