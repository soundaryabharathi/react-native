import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[talor,settalor]=useState(null)
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password,taloremail,talorpassword) => {
         
            try {
              await auth().signInWithEmailAndPassword(email, password,taloremail,talorpassword);
            } catch (e) {
              console.log(e);
            }
          },
          register: async (email, password) => {
            try {
              await auth().createUserWithEmailAndPassword(email, password);
            } catch (e) {
              console.log(e);
            }
          },
          logout: async () => {
            try {
              await auth().signOut(); 
            } catch (e) {
              console.error(e);
            }
          }
        }}
        values={{
          talor,
          settalor,
          talorlogin: async (email, password) => {
            try {
              await auth().signInWithEmailAndPassword(email, password);
            } catch (e) {
              console.log(e);
            }
          },
         talorregister: async (taloremail, talorpassword) => {
            try {
              await auth().createUserWithtalorEmailAndtalorPassword(taloremail, talorpassword);
            } catch (e) {
              console.log(e);
            }
          },
          logout: async () => {
            try {
              await auth().signOut(); 
            } catch (e) {
              console.error(e);
            }
          }
        }}
      
        
      >
        {children}
      </AuthContext.Provider>
    );
  };