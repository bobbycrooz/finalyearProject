import { useEffect } from "react";



 const resizer = (callback : (value: boolean) => void , setter: (number: number) => void ) => {
    if(document?.body?.clientWidth > 500){
        callback(false)
        setter(document.body.clientWidth)
        return

    }

       if (document?.body?.clientWidth < 500) {
         callback(true);
         setter(document?.body?.clientWidth);
         return;
       }
};


export const useResizer = (
  setIsMobile: (value: boolean) => void,
  setClientWidth: (value: number) => void
) => {
    
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener(
        "resize",
        () => resizer(setIsMobile, setClientWidth),
        true
      );
      setIsMobile((document?.body?.clientWidth || 0) < 800);
      setClientWidth(document?.body?.clientWidth);
    }

    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener(
          "resize",
          () => resizer(setIsMobile, setClientWidth),
          true
        );
      }
    };
  }, []);


};