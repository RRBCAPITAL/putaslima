"use client"


import React from 'react';
import Select from 'react-select';

const FiltroCategory = ({selectedCategory}) => {

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      border: state.isFocused ? '2px solid #3182CE' : '2px solid #E5E7EB',
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(49, 130, 206, 0.2)' : 'none',
      transition: 'border-color 0.3s ease',
      '&:hover': {
        borderColor: '#3182CE'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#bae1f6' : 'white',
      color: state.isFocused ? '#151E53' : 'black',
      cursor: 'pointer',
      transition: 'background-color 0.5s ease, color 0.5s ease'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#A0AEC0',
      transition: 'color 0.3s ease'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
      transition: 'color 0.3s ease'
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#F7FAFC',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
    }),
    menuList: (provided) => ({
      ...provided,
      padding: '8px',
      maxHeight: '200px',
      overflow: 'auto',
      transition: 'max-height 0.3s ease'
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#3182CE' : '#A0AEC0',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#3182CE'
      }
    })
  };

//   const handleChange = (selectedOption) => {
//     if (selectedOption) {
//       setOrderByAirport(selectedOption.value);
//     } else {
//       setOrderByAirport(null);
//     }
//   };

  const options = [
    { value: 'Educación', label: 'Educación' },
    { value: 'Restaurante', label: 'Restaurante' },
    { value: 'Consultoría', label: 'Consultoría' },
    { value: 'Salud', label: 'Salud' },
    { value: 'E-comerce', label: 'E-comerce' },
    { value: 'Blogs', label: 'Blogs' }
  ];

  const handleCategory = (e) => {
    // e.preventDefault()

    selectedCategory(e.value)
}

  return (
    <Select
      options={options}
    onChange={handleCategory}
      placeholder="Categorías"
      isClearable
      styles={customStyles}
    />
  );
};

export default FiltroCategory;