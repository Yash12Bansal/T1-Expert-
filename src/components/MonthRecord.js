// import firebase from '../utils/firebase';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import autoTable from 'jspdf-autotable'
import jsPDF from 'jspdf'

var isLogin= false
var Listid = [];
var Listin= [];
var uniqueNames =[{
  Fasting:"",
  abf:"",
  bl:"",
  al:"",
  bd:"",
  ad:"",
  threeam:"",
  CURRENT_DATE:"",
  CURRENT_TIME:"",
  CURRENT_BG:"",
  Fastingin:"",
  abfin:"",
  blin:"",
  alin:"",
  bdin:"",
  adin:"",
  threeamin:""
}] ;

export const MonthRecord = (props) => {
  const location = useLocation();
  const { state } = location;

  const [examinsulin, setexaminsulin] = useState([{
    AMOUNT:'',
    CATEGORY:'',
    CORRECTION_DOSE:'',
    CURRENT_DATE:'',
    CURRENT_TIME:'',
    DATE:'',
    TIME:'',
    TYPE:''
  }])
  const [exambg, setexambg] = useState([{
    BLOOD_GLUCOSE_TYPE:'',
    CURRENT_DATE:'',
    CURRENT_TIME:'',
    DATE:'',
    TIME:'',
    VALUE:''
  }])
  const exporthere = () => {

    console.log("my table");
    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table' })
    doc.save('CombinedRecord.pdf')
  
  };
    const [exam, setexam] = useState([{
        CURRENT_BG: "",
        CURRENT_DATE:"",
        CURRENT_TIME:"",
        DATE:"",
        FOOD_CATEGORY:"",
        FOOD_NAME:"",
        QUANTITY:"",
        TIME:""
      }])
      const [bgarr, setbgarr] = useState([{
        CURRENT_BG: "",
        CURRENT_DATE:"",
        CURRENT_TIME:""
      }])
      useEffect(() => {
        // const todoRef = firebase.database().ref('exercise_entry').child('Prediction').child(props.match.params.id);
        // todoRef.on('value', (snapshot) => {
        //   const todos = snapshot.val();
        //   const todoList = [];
        //   for (let id in todos) {
        //     todoList.push({ id, ...todos[id] });
        //   }
        //   todoList.reverse();
        //   setexam(todoList);
       
        // });

        // const todoRef2 = firebase.database().ref('insulin').child(props.match.params.id);
        // todoRef2.on('value', (snapshot) => {
        //   const todos = snapshot.val();
        //   const todoList = [];
        //   for (let id in todos) {
        //     todoList.push({ id, ...todos[id] });
        //   }
        //   todoList.reverse();
        //   setexaminsulin(todoList);
        // });

        // const todoRef3 = firebase.database().ref('blood_glucose').child(props.match.params.id);
        // todoRef2.on('value', (snapshot) => {
        //   const todos = snapshot.val();
        //   const todoList = [];
        //   for (let id in todos) {
        //     todoList.push({ id, ...todos[id] });
        //   }
        //   todoList.reverse();
        //   setexambg(todoList);
        // });


      }, []);
    //   firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       // User is signed in.
    //       isLogin=true;
    //       console.log(user.displayName);
          
    //     } else {
    //       // No user is signed in.
    //     }
    //   });
      
  
      


      return (
        <div className="App">
        
          <h1 className="heading">Blood Glucose Trend</h1>
          <h1 className="heading">Patient: {props.match.params.id}</h1>
          <Button variant="primary" onClick={exporthere} >
    Download Combined Record
    </Button>
    {localStorage.getItem('login')=="true"? (<div>
        {
              exam.map((varrr) => {
                  
                  let obj = uniqueNames.find(o => o.CURRENT_DATE === varrr.CURRENT_DATE && o.CURRENT_TIME === varrr.CURRENT_TIME );
                // console.log(obj)
                if(obj==null){
                  let obj2 = uniqueNames.find(o => o.CURRENT_DATE === varrr.CURRENT_DATE );
                  if(obj2==null){
                    if(varrr.FOOD_CATEGORY=="Breakfast"){
                      let tryth={
                        Fasting:varrr.CURRENT_BG,
                        abf:"--",
                        bl:"--",
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:varrr.CURRENT_BG,
                        Fastingin:"--",
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      uniqueNames.push(tryth);
                    }else if(varrr.FOOD_CATEGORY=="Lunch"){
                      let tryth={
                        Fasting:"--",
                        abf:"--",
                        bl:varrr.CURRENT_BG,
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam: "--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:varrr.CURRENT_BG,
                        Fastingin:"--",
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      uniqueNames.push(tryth);
                    }else if(varrr.FOOD_CATEGORY=="Dinner"){
                      let tryth={
                        Fasting:"--",
                        abf:"--",
                        bl:"--",
                        al:"--",
                        bd:varrr.CURRENT_BG,
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:varrr.CURRENT_BG,
                        Fastingin:"--",
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      uniqueNames.push(tryth);
                    }
                    
                  }else{
                    let tryth =obj2;
                    if(varrr.FOOD_CATEGORY=="Lunch"){
                      tryth.bl = varrr.CURRENT_BG;
                      uniqueNames.pop(tryth);
                      uniqueNames.push(tryth);
                    }else if(varrr.FOOD_CATEGORY=="Breakfast"){
                      tryth.Fasting = varrr.CURRENT_BG;
                      uniqueNames.pop(tryth);
                      uniqueNames.push(tryth);
                    }else if(varrr.FOOD_CATEGORY=="Dinner"){
                      tryth.bd = varrr.CURRENT_BG;
                      uniqueNames.pop(tryth);
                      uniqueNames.push(tryth);
                    }
                    
                  }
                      // uniqueNames.push(tryth);
                      // Listid.push(parseInt(varrr.CURRENT_BG , 10 ) + 1);
                      // Listin.push(varrr.CURRENT_DATE)
                }
              }
            )}
             {
              examinsulin.map((varrr) => {
                  
                  let obj = uniqueNames.find(o => o.CURRENT_DATE === varrr.CURRENT_DATE );
                // console.log(obj)
                
                if(obj==null){
                

                    if(varrr.CATEGORY=="Pre-breakfast"){
                      let tryth={
                        Fasting:"--",
                        abf:"--",
                        bl:"--",
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:"--",
                        Fastingin:varrr.AMOUNT,
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      
                      uniqueNames.push(tryth);
                    }else if(varrr.CATEGORY=="Pre-lunch"){
                      let tryth={
                        Fasting:"--",
                        abf:"--",
                        bl:"--",
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:"--",
                        Fastingin:"--",
                        abfin:"--",
                        blin:varrr.AMOUNT,
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      
                      uniqueNames.push(tryth);
                    }else if(varrr.CATEGORY=="Pre-dinner"){
                      let tryth={
                        Fasting:"--",
                        abf:"--",
                        bl:"--",
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:"--",
                        Fastingin:"--",
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:varrr.AMOUNT,
                        adin:"--",
                        threeamin:"--"
                      }
                      
                      uniqueNames.push(tryth);
                    
                  }else if(varrr.CATEGORY=="Bed-time"){
                    let tryth={
                      Fasting:"--",
                      abf:"--",
                      bl:"--",
                      al:"--",
                      bd:"--",
                      ad:"--",
                      threeam:"--",
                      CURRENT_DATE:varrr.CURRENT_DATE,
                      CURRENT_TIME:varrr.CURRENT_TIME,
                      CURRENT_BG:"--",
                      Fastingin:"--",
                      abfin:"--",
                      blin:"--",
                      alin:"--",
                      bdin:"--",
                      adin:varrr.AMOUNT,
                      threeamin:"--"
                    }
                    
                    uniqueNames.push(tryth);
                  
                }
                      // uniqueNames.push(tryth);
                      // Listid.push(parseInt(varrr.CURRENT_BG , 10 ) + 1);
                      // Listin.push(varrr.CURRENT_DATE)
                }else{
                  let tryth =obj;
                  // {console.log(obj)}
                  if(varrr.CATEGORY=="Pre-lunch"){
                    tryth.blin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }else if(varrr.CATEGORY=="Pre-breakfast"){
                    tryth.Fastingin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }else if(varrr.CATEGORY=="Pre-dinner"){
                    tryth.bdin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }else if(varrr.CATEGORY=="Bed-time"){
                    tryth.adin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }
                  
                }
              }
            )}
         {
              exambg.map((varrr) => {
                  
                  let obj = uniqueNames.find(o => o.CURRENT_DATE === varrr.CURRENT_DATE );
                // console.log(obj)
                
                if(obj==null){
                

                    if(varrr.BLOOD_GLUCOSE_TYPE=="Fasting"){
                      let tryth={
                        Fasting:varrr.VALUE,
                        abf:"--",
                        bl:"--",
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:"--",
                        Fastingin:"--",
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      
                      uniqueNames.push(tryth);
                    }else if(varrr.BLOOD_GLUCOSE_TYPE=="2 hrs after breakfast"){
                      let tryth={
                        Fasting:"--",
                        abf:varrr.VALUE,
                        bl:"--",
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:"--",
                        Fastingin:"--",
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      
                      uniqueNames.push(tryth);
                    }else if(varrr.BLOOD_GLUCOSE_TYPE=="Before lunch"){
                      let tryth={
                        Fasting:"--",
                        abf:"--",
                        bl:varrr.VALUE,
                        al:"--",
                        bd:"--",
                        ad:"--",
                        threeam:"--",
                        CURRENT_DATE:varrr.CURRENT_DATE,
                        CURRENT_TIME:varrr.CURRENT_TIME,
                        CURRENT_BG:"--",
                        Fastingin:"--",
                        abfin:"--",
                        blin:"--",
                        alin:"--",
                        bdin:"--",
                        adin:"--",
                        threeamin:"--"
                      }
                      
                      uniqueNames.push(tryth);
                    
                  }else if(varrr.BLOOD_GLUCOSE_TYPE=="2 hrs after lunch"){
                    let tryth={
                      Fasting:"--",
                      abf:"--",
                      bl:"--",
                      al:varrr.VALUE,
                      bd:"--",
                      ad:"--",
                      threeam:"--",
                      CURRENT_DATE:varrr.CURRENT_DATE,
                      CURRENT_TIME:varrr.CURRENT_TIME,
                      CURRENT_BG:"--",
                      Fastingin:"--",
                      abfin:"--",
                      blin:"--",
                      alin:"--",
                      bdin:"--",
                      adin:"--",
                      threeamin:"--"
                    }
                    
                    uniqueNames.push(tryth);
                  
                }else if(varrr.BLOOD_GLUCOSE_TYPE=="Before dinner"){
                  let tryth={
                    Fasting:"--",
                    abf:"--",
                    bl:"--",
                    al:"--",
                    bd:varrr.VALUE,
                    ad:"--",
                    threeam:"--",
                    CURRENT_DATE:varrr.CURRENT_DATE,
                    CURRENT_TIME:varrr.CURRENT_TIME,
                    CURRENT_BG:"--",
                    Fastingin:"--",
                    abfin:"--",
                    blin:"--",
                    alin:"--",
                    bdin:"--",
                    adin:"--",
                    threeamin:"--"
                  }
                  
                  uniqueNames.push(tryth);
                
              }else if(varrr.BLOOD_GLUCOSE_TYPE=="2 hrs after dinner"){
                let tryth={
                  Fasting:"--",
                  abf:"--",
                  bl:"--",
                  al:"--",
                  bd:"--",
                  ad:varrr.VALUE,
                  threeam:"--",
                  CURRENT_DATE:varrr.CURRENT_DATE,
                  CURRENT_TIME:varrr.CURRENT_TIME,
                  CURRENT_BG:"--",
                  Fastingin:"--",
                  abfin:"--",
                  blin:"--",
                  alin:"--",
                  bdin:"--",
                  adin:"--",
                  threeamin:"--"
                }
                
                uniqueNames.push(tryth);
              
            }else if(varrr.BLOOD_GLUCOSE_TYPE=="3:00 am"){
              let tryth={
                Fasting:"--",
                abf:"--",
                bl:"--",
                al:"--",
                bd:"--",
                ad:"--",
                threeam:varrr.VALUE,
                CURRENT_DATE:varrr.CURRENT_DATE,
                CURRENT_TIME:varrr.CURRENT_TIME,
                CURRENT_BG:"--",
                Fastingin:"--",
                abfin:"--",
                blin:"--",
                alin:"--",
                bdin:"--",
                adin:"--",
                threeamin:"--"
              }
              
              uniqueNames.push(tryth);
            
          }
                      // uniqueNames.push(tryth);
                      // Listid.push(parseInt(varrr.CURRENT_BG , 10 ) + 1);
                      // Listin.push(varrr.CURRENT_DATE)
                }else{
                  let tryth =obj;
                  // {console.log(obj)}
                  if(varrr.CATEGORY=="Pre-lunch"){
                    tryth.blin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }else if(varrr.CATEGORY=="Pre-breakfast"){
                    tryth.Fastingin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }else if(varrr.CATEGORY=="Pre-dinner"){
                    tryth.bdin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }else if(varrr.CATEGORY=="Bed-time"){
                    tryth.adin = varrr.AMOUNT;
                    uniqueNames.pop(tryth);
                    uniqueNames.push(tryth);
                  }
                  
                }
              }
            )}
            {


            <table className="MonthrecordTable" id="my-table" >
            <tr>
            <th>CURRENT DATE</th>
            <th>Description</th>
            <th>Fasting</th>
            <th>ABF</th>
            <th>BL</th>
            <th>AL</th>
            <th>BD</th>
            <th>AD</th>
            <th>3 AM</th>
            </tr>

           { uniqueNames.map((varrr) => 
            
       
<>
       <tr>
       <td>{varrr.CURRENT_DATE}</td>
       <td><b>BG</b></td>
       <td>{varrr.Fasting}</td>
         <td>{varrr.abf}</td>
        <td>{varrr.bl}</td>
        <td>{varrr.al}</td>
        <td>{varrr.bd}</td>
        <td>{varrr.ad}</td>
        <td>{varrr.threeam}</td>
       </tr>
        <tr>
        <td>{varrr.CURRENT_DATE}</td>
        <td><b>Insulin</b></td>
        <td>{varrr.Fastingin}</td>
          <td>{varrr.abfin}</td>
         <td>{varrr.blin}</td>
         <td>{varrr.alin}</td>
         <td>{varrr.bdin}</td>
         <td>{varrr.adin}</td>
         <td>{varrr.threeamin}</td>
       
        </tr>
        <br></br>
      </>
      
       )}
     </table>
}
    </div>) : (<div>
SIGN IN ERROR
    </div>)}
      
        </div>
      );
 
}

export default MonthRecord;