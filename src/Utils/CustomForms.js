import React from "react";



export const RenderForm = ({
    input,
    children,
    meta: { touched, error, warning },
    errorVisible = true,
    ...props
  }) => {
      
    const hasError = touched && error && errorVisible;
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {...input, ...props, className:props.className + (hasError ? ' validate-error' : '')});
        }
        return child;
      });
      return ( 
          <div > 
              <div className={hasError ? 'validate-error-sign' : ''}>
                {childrenWithProps}
              </div>
              {hasError && <span className='error-mesage'>{error}</span>}
          </div>
      )
}