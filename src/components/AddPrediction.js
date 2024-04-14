// import firebase from '../utils/firebase';
import React,{useState,useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


var isLogin=false;

 
export const EditPrediction = (props) => {
    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.my_input)
    //     var postListRef = firebase.database().ref('exercise_entry').child('Prediction_values').child(formDataObj.unique_id);

    //     postListRef.set({
    // AVERAGE_BREAKFAST: formDataObj.avg_breakfast,
    //         AVERAGE_DINNER: formDataObj.avg_dinner,
    //         AVERAGE_LUNCH: formDataObj.avg_lunch,
    //         AVERAGE_SNACK: formDataObj.avg_snack,
    //         BREAKFAST_ICR: formDataObj.breakfast_icr,
    //         BREAKFAST_ISF: formDataObj.breakfast_isf,
    //         DINNER_ICR: formDataObj.dinner_icr,
    //         DINNER_ISF: formDataObj.dinner_isf,
    //         DIVISION_BY: formDataObj.division_by,
    //         ICR: formDataObj.icr,
    //         INSULIN_DOSE: formDataObj.insulin_dose,
    //         ISF: formDataObj.isf,
    //         LUNCH_ICR: formDataObj.lunch_icr,
    //         LUNCH_ISF: formDataObj.lunch_isf,
    //         PREV_INSULIN_TIME: formDataObj.prev_insulin_time
// });
    //     firebase.database().ref('exercise_entry').child('Prediction_values').child('jj').set({
           
    //           }, (error) => {
    //             if (error) {
    //               // The write failed...
    //             } else {
    //               // Data saved successfully!
    //             }
    //           });
      }
  
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if (user) {
      //     // User is signed in.
      //     isLogin=true;
      //     console.log(user.displayName);
          
      //   } else {
      //     // No user is signed in.
      //   }
      // });
      
    
      
      // const [blogs,setBlogs]=useState([])
      // const fetchBlogs=async()=>{
      //   const response=db.collection('contactus');
      //   const data=await response.get();
      //   data.docs.forEach(item=>{
      //    setBlogs([...blogs,item.data()])
      //   })
      // }
      // useEffect(() => {
      //   fetchBlogs();
      // }, [])
      


      return (
        <div className="edit-prediction">
        
          <h1 className="heading">Insulin Entries</h1>
          <h1 className="heading">Patient: </h1>
          
    {localStorage.getItem("email")=='jatinbindra171998@gmail.com'? (<div >
        <div >
        <Form onSubmit={onFormSubmit} className="form-prediction">
        <Form.Text className="text-muted">
      *This is unique and can't have few special characters
    </Form.Text>
        <Form.Group className="form-group" >
    <Form.Label className="form-label">UNIQUE ID</Form.Label>
    
    <Form.Control className="form-label" placeholder="unique id" name="unique_id" required/> 
    
  </Form.Group>
 
  <Form.Group className="form-group" >
    <Form.Label className="form-label">AVERAGE BREAKFAST</Form.Label>
    <Form.Control className="form-label" placeholder="AVERAGE_BREAKFAST" name="avg_breakfast" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>AVERAGE DINNER</Form.Label>
    <Form.Control  placeholder="AVERAGE_DINNER" name="avg_dinner" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>AVERAGE LUNCH</Form.Label>
    <Form.Control  placeholder="AVERAGE_LUNCH" name="avg_lunch" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>AVERAGE SNACK</Form.Label>
    <Form.Control  placeholder="AVERAGE_SNACK" name="avg_snack" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>BREAKFAST ICR</Form.Label>
    <Form.Control  placeholder="BREAKFAST_ICR" name="breakfast_icr" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>BREAKFAST ISF</Form.Label>
    <Form.Control  placeholder="BREAKFAST_ISF" name="breakfast_isf" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>DINNER ICR</Form.Label>
    <Form.Control  placeholder="DINNER_ICR" name="dinner_icr" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>DINNER ISF</Form.Label>
    <Form.Control  placeholder="DINNER_ISF" name="dinner_isf" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>DIVISION BY</Form.Label>
    <Form.Control  placeholder="DIVISION_BY" name="division_by" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>ICR</Form.Label>
    <Form.Control  placeholder="ICR" name="icr" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>INSULIN DOSE</Form.Label>
    <Form.Control  placeholder="INSULIN_DOSE" name="insulin_dose" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>ISF</Form.Label>
    <Form.Control  placeholder="ISF" name="isf" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>LUNCH_ICR</Form.Label>
    <Form.Control  placeholder="LUNCH_ICR" name="lunch_icr" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>LUNCH_ISF</Form.Label>
    <Form.Control  placeholder="LUNCH_ISF" name="lunch_isf" required/> 
  </Form.Group>
  <Form.Group >
    <Form.Label>PREVIOUS INSULIN TIME</Form.Label>
    <Form.Control  placeholder="PREV_INSULIN_TIME" name="prev_insulin_time" required/> 
  </Form.Group>



  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>

       </div>
    </div>) : (<div>
ERROR
    </div>)}
      
        </div>
      );
 
}

export default EditPrediction;