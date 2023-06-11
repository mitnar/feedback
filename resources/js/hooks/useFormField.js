import React from 'react';

const useFormField = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    const onChange = React.useCallback((e) => setValue(e.target.value), []);
    return { value, onChange };
  };

  export default useFormField;
