import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ExerciseDetails from "./ExerciseDetails";
import Loading from "./Loading";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import RequestListItemFnE from "./RequestListItemFnE";
import RequestListItemFood from "./RequestLIstItemFood";
import RequestListItem from "./RequestListItem";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";
toast.configure();
function Main({ user, setUser }) {
  const [patientsList, setPatientsList] = useState(null);
  const [foodList, setFoodList] = useState(null);
  const [exerciseList, setExerciseList] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const [showExerciseDialog, setShowExerciseDialog] = useState(false);
  const [showFoodDialog, setShowFoodDialog] = useState(false);

  // http://localhost:8080/
  const getPendings = () => {
    let endpoints = [
      `${process.env.REACT_APP_API_URL}/getPendingPatients`,
      `${process.env.REACT_APP_API_URL}/getPendingFoods`,
      `${process.env.REACT_APP_API_URL}/getPendingExercises`,
    ];

    try {
      Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        ([
          { data: patientsList },
          { data: foodList },
          { data: exerciseList },
        ]) => {
          // console.log(exerciseList);
          // console.log(exerciseList.length);
          // console.log(typeof exerciseList);

          setPatientsList(patientsList);
          setFoodList(foodList);
          setExerciseList(exerciseList);
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPendings();
  }, []);
  return (
    <div className="outmost">
      <Navbar user={user} setUser={setUser} currentComponent={"Home"} />
      <div className="flex-box-div">
        <div className="pending-patients-requests-outer">
          <div className="pending-requests-title">
            <h4 className="diff-requests-title underline2">New Patients</h4>
          </div>
          <div className="pending-patients-requests-list">
            {patientsList == null ? (
              <BeatLoader className="loading-list" color="#709fe6" />
            ) : patientsList.length == 0 ? (
              <div className="all-website-font">
                <h3 className="no-pending-requests">No Pending Requests</h3>
              </div>
            ) : (
              <ul>
                {patientsList.map((patient) => {
                  return (
                    <li>
                      <RequestListItem
                        list={patientsList}
                        patient={patient}
                        setList={setPatientsList}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="pending-patients-requests-outer">
          <div className="pending-requests-title">
            <h4 className="diff-requests-title underline2">Food Requests</h4>
          </div>
          <div className="pending-patients-requests-list">
            {foodList == null ? (
              <BeatLoader className="loading-list" color="#709fe6" />
            ) : //
            foodList.length == 0 ? (
              <div className="all-website-font">
                <h3 className="no-pending-requests">No Pending Requests</h3>
              </div>
            ) : (
              <ul>
                {foodList.map((food) => {
                  return (
                    <li>
                      <RequestListItemFood
                        list={foodList}
                        setList={setFoodList}
                        key={food._id}
                        item={food.food_name}
                        onClick={() => {
                          console.log("set show food dialog function called!!");
                          setShowFoodDialog(true);
                        }}
                        onClose={() => {
                          setShowFoodDialog(false);
                        }}
                        startLoading={() => {
                          setShowLoading(true);
                        }}
                        stopLoading={() => {
                          setShowLoading(false);
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="pending-patients-requests-outer">
          <div className="pending-requests-title">
            <h4 className="diff-requests-title underline2">
              Exercise Requests
            </h4>
          </div>
          <div className="pending-patients-requests-list">
            {exerciseList == null ? (
              <BeatLoader className="loading-list" color="#709fe6" />
            ) : exerciseList.length == 0 ? (
              <div className="all-website-font">
                <h3 className="no-pending-requests">No Pending Requests</h3>
              </div>
            ) : (
              <ul>
                {exerciseList.map((exercise) => {
                  return (
                    <li>
                      <RequestListItemFnE
                        list={exerciseList}
                        setList={setExerciseList}
                        key={exercise._id}
                        item={exercise.exercise_name}
                        onClick={() => {
                          console.log(
                            "set show exercise dialog function called!!"
                          );
                          setShowExerciseDialog(true);
                        }}
                        onClose={() => {
                          setShowExerciseDialog(false);
                        }}
                        startLoading={() => {
                          setShowLoading(true);
                        }}
                        stopLoading={() => {
                          setShowLoading(false);
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
