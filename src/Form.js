import React from "react";
class Form extends React.Component{
    render() {
    return(
        <div>
            <p> Online TNPSC Register </p>
            <form>
            <fieldset>
         <label>
           <p>Name</p>
           <input name="name" type={String}/>
         </label>
         <label>
           <p>Mobile Number</p>
           <input name="mobile number" type={Number} />
         </label>
         <label>
           <p>Password</p>
           <input name="mobile number" type={"password"} required />
         </label>
       </fieldset>
       <button type="submit">Register</button>
       <button type="get">Get Details</button>
      
   
            </form>

        </div>
    );
}
}
export default Form;



    

    
        

    
    

