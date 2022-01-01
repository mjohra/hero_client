import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [learner, setLearner] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [licencePhoto, setLicencePhoto] = useState("");
  const [nid, setNid] = useState("");
  const [profile, setProfile] = useState("");
  const [carType, setCarType] = useState("");
  const [carInfo, setCarInfo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };
  
  const handleLicensePhotoChange = (e) => {
    setLicencePhoto(e.target.value);
  };
  const handleNidChange = (e) => {
    setNid(e.target.value);
  };
  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };
  const handleCarInfoChange = (e) => {
    setCarInfo(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const adminInfo = ["admin@admin.com", "abcd1234"];
  const navigate = useNavigate();

  const adminLogin = (email, pass, redirect) => {
    if (email === adminInfo[0] && pass === adminInfo[1]) {
      localStorage.setItem("login", true);
      setAdmin(true);
      navigate('/admin');
      // console.log(redirect);
    } else {
      window.alert("Please use admin email and password;");
    }
  };

  const logOutAdmin = (email, password) => {
    localStorage.removeItem("login");
    navigate('/');
    setAdmin(false);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }

    registerNewUser(email, password, name,age,area,address,phone,licencePhoto,nid,profile,carInfo,);
  };

  const processLogin = (e) => {
    // e.preventDefault();
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLeanerRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }

    registerLearnerUser(email, password, name,age,address,phone,nid,profile,carType);
  };

  const registerNewUser = (email, password, name,age,area,address,phone,licencePhoto,nid,profile,carInfo) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
        navigate('/rider_dash');
        const newUser = { email, displayName: name,age, area,address,phone,licencePhoto,nid,profile,carInfo };
        setUser(newUser);
        //save user to the database
        saveUser(email, name,age,area,address,phone,licencePhoto,nid,profile,carInfo, "POST");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const registerLearnerUser = (email, password, name,age,address,phone,nid,profile,carType) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        verifyEmail();
        setUserName();
        navigate('/learner_dash');
        const newUser = { email, displayName: name,age,address,phone,nid,profile,carType };
        setLearner(newUser);
        //save user to the database
        saveLearner(email,name,age,address,phone,nid,profile,carType, "POST");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  const logOut = () => {
    setIsLoading(true);
    localStorage.removeItem("AdminLogIn");
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

 //
 const saveUser = (email, displayName,age,area,address,phone,licencePhoto,nid,profile,carInfo, method) => {
  const user = { email, displayName,age,area,address,phone,licencePhoto,nid,profile,carInfo,userType:"Rider" };
  fetch("http://localhost:5000/rider", {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then();
};
 const saveLearner = (email,displayName,age,address,phone,nid,profile,carType, method) => {
  const user1 = { email, displayName,age,area,address,phone,nid,profile,carType,userType:"Learner" };
  fetch("http://localhost:5000/learner", {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user1),
  }).then();
};

//admin check
useEffect(() => {
  fetch(`http://localhost:5000/users/${user.email}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setAdmin(data.admin);
      if(data.admin){
        localStorage.setItem("AdminLogIn", true);
      }
      
    });
}, [user.email]);

  return {
    user,
    admin,
    isLoading,
    adminLogin,
    logOutAdmin,
    handleResetPassword,
    handleRegistration,
    handlePasswordChange,
    handleEmailChange,
    handleNameChange,
    error,
    processLogin,
    logOut,
    setUser,
    setIsLoading,
    handleAgeChange,
    handleAreaChange,
    handleAddressChange,
    handleLeanerRegistration,
    handlePhoneChange,
    registerNewUser,
    handleCarTypeChange,
    handleLicensePhotoChange,
    handleNidChange,
    handleProfileChange,
    handleCarInfoChange,
    saveUser,
    setError,
  };
};

export default useFirebase;
