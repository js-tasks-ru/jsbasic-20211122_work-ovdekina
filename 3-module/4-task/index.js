function showSalary(users, age) {
  const arr1 = users.map((item) => (item.age <= age ? [item.name, item.balance] : []));
  const arr2 = arr1.filter((item) => (item.length > 0));
  let arr3 = arr2.map((item) => item.join(', '));
  return arr3.join('\n');
}


