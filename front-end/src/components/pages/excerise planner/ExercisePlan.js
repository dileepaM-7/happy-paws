const getExercisePlan = (breed, weight, age) => {
    let plan = '';
    if (weight === 'normal' && age === '1-7 years old') {
      plan = 'Plan for normal weight dogs aged 1-7 years old';
    } else if (weight === 'overweight' && age === '7 years old and older') {
      plan = 'Plan for overweight dogs aged 7 years old and older';
    } else {
      plan = 'General exercise plan';
    }
    return plan;
  };
  
  export { getExercisePlan };
  