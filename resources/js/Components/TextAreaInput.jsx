import {Children, React, forwardRef, useEffect, useRef} from "react";

export default forwardRef(function TextAreaInput( {
  className = "", isFocused = false, children, ...props
}, ref){
  const input = ref ? ref : useRef();
  useEffect(()=>{
    if(isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <textarea {...props} className={"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:ring-indigo-600 rounded-md shdow-sm " + className} ref={input}>{children}</textarea>
  );

});

