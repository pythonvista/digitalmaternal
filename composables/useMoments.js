import moment from 'moment';

// var admission = moment('{date1}', 'DD-MM-YYYY');
// var discharge = moment('{date2}', 'DD-MM-YYYY');

export const GetDate = () => {
  // let currdate = moment(new Date().toJSON().slice(0, 10));
  let currdate = new Date().toISOString().slice(0, 10);
  
  return currdate
};
