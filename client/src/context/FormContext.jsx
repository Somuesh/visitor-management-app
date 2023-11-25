import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext(undefined);

export const FormProvider = ({ children }) => {

  const [formState, setFormState] = useState({
    visitors_name: '',
    visitors_mobile: '',
    visitors_address:'',
    drinks_snacks:'',
    came_to_meet:'',
    reason_for_visit:'',
  });


  return (
    <FormContext.Provider
      value={{
        formState,
        setFormState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

// Mark the file as a module
export { };
