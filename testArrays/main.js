const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2005},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 1989},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  for (let i = 0; i < companies.length; i++){
        console.log(companies[i])
  }

  //for loop
  //let canDrinks = [];
  
  for (let i=0; i< ages.length; i++){
      if(ages[i] >= 21){
          canDrinks.push(ages[i])
      }
  }


  //forEach
  var display = '<h2 class="mb-4">users</h2>';
  companies.forEach(function(company){
    display += `
    ${company.name}
    <br>
    `
  })
  document.getElementById('demo').innerHTML = display;


  //filter
 // const canDrinks = ages.filter(function(age){
  //    if(age >= 21){
  //        return true;
  //    }
  //});

  //filter
 // const retailCompanies = companies.filter(function(company){
 //     if(company.category === "Retail"){
  //        return true;
  //    }
      
  //});

  //const eightiesCompanies = companies.filter(function(company){
    //  if((company.start >= 1980) && (company.end < 1990));
    //  return true;
  // })


  

    //ES6 version filter
  // const canDrinks = ages.filter(age => age >= 21);

  // const retailCompanies = companies.filter(company => company.category === 'Retail')
  
   //  const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.end < 1990))

   //lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

   //console.log(lastedTenYears);
 
 //console.log(eightiesCompanies);
 
 // console.log(retailCompanies);
  
 // console.log(canDrinks);

  
 
 //map
  companyNames = companies.map(company => company.name);

  const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
  
  const sqRt = ages
  .map(age => Math.sqrt(age) )
  .map(age => age * 2)
  .map(age => Math.floor(age))
  
  console.log(sqRt);
  


  //sort
    //sort companies by start year
  const sortedCompanies = companies.sort(function(c1, c2){
      if(c1.start > c2.start){
          return 1
      }else{
          return -1
      }
  })


  //Es6

  const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1)
  console.log(sortedCompanies);

  const sortAges = ages.sort((a, b) => b > a ? 1 : -1)
  console.log(sortAges);
  
  
  //reduce
  //for loop
  let ageSum = 0;
  for (i=0; i < ages.length; i++){
      ageSum += ages[i]
  }

  const ageSum = ages.reduce(function(total, age) {
      return total + age;
  }, 0);


  const totalYears = companies.reduce(function(total, company){
      return total + (company.end - company.start);
  }, 0);

  const totalYears = companies.reduce((total, company)=> total + (company.end - company.start), 0); 

  console.log(totalYears);
  

  //combined Methods

  const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b)=> a - b)
  .reduce((total, age)=> (total + age), 0)


  console.log(combined);
  