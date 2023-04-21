/**
 * CONTEXT API
 * create provider
 * set cotext value
 * to access the value: useContext Hook
 * */ 
//  --------------------------------------------
/**
 * 1. set AuthProvider at main.jsx
 * 2. inside proder access children props and then use
 **/ 

// --------------------------------------------------
/**
 * to authorise from a central page 
 * 1. make create/SignInUserWithEmailAndPassword in the central page in our case it's AuthProvidere
 * 2. then make a funtion with create/SignInUserWithEmailAndPassword and set it on the context
 * 3. recive the function from where it will use call the function and do everything as before 
 * */ 
// -----------------------------------------------------------------
/**
 * to get the current user / on auth state change
 * 1. call the onAuthStateChange function inside the useEffect Hook
 * 2. the function takes 2 paremiters first one is the auth and second one is a call back function which usually return the current user
 * set the current user to a state to that other function can use it as well
 * */ 