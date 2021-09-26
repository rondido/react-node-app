import Customer from './components/Customer';
import './App.css';

const customer ={
    'name':'박짜장',
    'birthday' : '941118',
    'gender' : '남자',
    'job' : '대학생'
}

function App() { // 웹사이트 화면 출력
  return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
  );
}

export default App;
