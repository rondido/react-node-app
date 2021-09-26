import Customer from './components/Customer';
import './App.css';

const customers =
    [{
    'id': 1,
    'image' : 'https://placeimg.com/64/64/1', //랜덤으로 이미지 보여주는 사이트
    'name':'박짜장',
    'birthday' : '941118',
    'gender' : '남자',
    'job' : '대학생'
    },
    {
    'id': 2,
    'image' : 'https://placeimg.com/64/64/2', //랜덤으로 이미지 보여주는 사이트
    'name':'박짬뽕',
    'birthday' : '941110',
    'gender' : '여자',
    'job' : '대학생'
    },
    {
    'id': 3,
    'image' : 'https://placeimg.com/64/64/3', //랜덤으로 이미지 보여주는 사이트
    'name':'박라면',
    'birthday' : '941210',
    'gender' : '남자',
    'job' : '직장인'
    }
    ]

function App() { // 웹사이트 화면 출력
  return (
        <div>
            {
                customers.map(a => {
                    return (<Customer
                        key={a.id}
                        id={a.id}
                        image={a.image}
                        name={a.name}
                        birthday={a.birthday}
                        job={a.job}
                    />)
                })
            }
    </div>
  );
}

export default App;
